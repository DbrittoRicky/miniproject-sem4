import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import './header.css'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className=' navhead'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='logout'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='loginlink' to={'/login'}>Login</Link>
                        <Link className='registerlink' to={'/register'}>Register</Link>
                    </>
            }

        </nav>
    )
}

export default Header