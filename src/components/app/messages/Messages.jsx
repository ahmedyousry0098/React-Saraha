import axios from 'axios'
import React, {useContext, useState} from 'react'
import {apiConfig} from '../../../constants/api'
import { AuthContext } from '../../../context/AuthContext'
import { useQuery } from 'react-query'
import MessageCard from '../messageCard/MessageCard'
import SharedLink from '../modal/SharedLink'

function Messages() {

    const {state} = useContext(AuthContext)

    const { isLoading, error, data } = useQuery('repoData', () => {
        return axios.get(`${apiConfig.BASE_URL}/message`, {
            headers: {
                token: state.token
            }
        }) 
    })

    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (error) {
        return <div className="d-flex justify-content-center">
            <p className='text-center'>{error}</p>
        </div>
    }
    
    if (!data?.allMessages) {
        return <div className="container text-center my-5 text-center">
            <div className="row">
                <div className="col-md-12">
                    <div className="card py-5">
                        <p>You don't have any messages... </p>
                    </div>
                </div>
            </div>
        </div>
    }
    
    return (
        <div className='row align-items-center'>
            {data.allMessages.map((msg,index) => {
                return <>
                    <MessageCard 
                        key={index}
                        msg={msg}
                    />
                </>
            })}
        </div>
    )
}

export default Messages