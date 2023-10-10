import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../../../context/AuthContext'

function Navbar() {

    const {state: {isLoggedIn}} = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-lg shadow-lg">
            <div className="container">
                <div >
                    <Link className="navbar-brand text-white fs-4 me-5 col-lg-1" to={isLoggedIn?'/home':'/login'}>
                        <img src={'https://mobilemarketingmagazine.com/wp-content/uploads/Sarahah.png'} className='saraha-logo'/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="d-flex flex-row ms-auto">
                        {
                            !isLoggedIn ? <>
                                <Link className="nav-link text-white fs-4 me-3" aria-current="page" to="register">Register</Link>
                                <Link className="nav-link text-white fs-4 me-3" to="login">Login</Link>
                            </>
                            : <>
                                <Link className="nav-link text-white fs-4 me-3" to="artist">Profile</Link>
                                <Link className="nav-link text-white fs-4 me-3" to="contacts">Logout</Link>
                            </>
                        }                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar