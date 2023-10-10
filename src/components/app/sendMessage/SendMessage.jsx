import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Profile from '../profile/Profile'
import './SendMessage.css'
import * as yup from 'yup'
import axios from 'axios'
import { apiConfig } from '../../../constants/api'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

function SendMessage() {

    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState('')
    const {state} = useContext(AuthContext)
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: yup.object({
            message: yup.string().max(2000, 'message is too long').min(3, 'message is too short')
        }),
        onSubmit: async (values) => {
            console.log('hi sharks');
            setIsLoading(true)
            await axios.post(`${apiConfig.BASE_URL}/message`, {
                messageContent: values.message,
                receivedId: id
            }).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
                setResponse(err.message)
            }).finally(() => {
                setIsLoading(false)
            })
        }   
    })

    useEffect(() => {

    })

    return (
        <div className='row'>
            <div className='col-lg-6 col-md-9 col-sm-12 mx-auto shadow-sm rounded position-relative'>
                <Profile showShareBtn={false}/>
                <form onSubmit={formik.handleSubmit}>
                    <textarea 
                        className='w-100 mx-auto p-3'
                        style={{minHeight: 250}}
                        name="message" 
                        placeholder={'write message ..'}
                        value={formik.values.message} 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                    />
                    {
                        formik.errors.message && formik.touched.message && <div className='alert alert-danger p-1 my-2'>
                            <p className='p-0 m-0'>{formik.errors.message}</p>
                        </div>
                    }
                    <button type="submit" class='btn btn-outline-success my-3'> 
                        {
                            isLoading ? <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : <span>Send Message</span>
                        }
                    </button>
                </form>
                {
                    response && <div className='alert alert-danger position-absolute start-0' style={{bottom: -100}}>
                        <p className='text-center'>{response}</p>  
                    </div>
                }
            </div>
        </div>
    )
}

export default SendMessage