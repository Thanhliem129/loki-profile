import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("userLokiProfile")));
    const handleLogout = () => {
        localStorage.removeItem('userLokiProfile');
        setTimeout(() => {
            window.location.href = `/`
        }, 200);
    }
    return (
        <div className='bg-dark'>
            <div className='container'>
                <nav className="nav nav-tabs nav-stacked justify-content-between py-2 border-0">
                    <div className='d-flex'>
                        <Link className="nav-link text-white" to="/">Home page</Link>
                        {
                            currentUser && (
                                <div className='d-flex'>
                                    <Link className="nav-link text-white" to="/posts">Post</Link>
                                    <Link className="nav-link text-white" to="/profile">Profile</Link>
                                </div>
                                
                            )
                        }
                    </div>
                    <div className='d-flex'>
                        {
                            !currentUser &&  <Link className="nav-link text-white " to="/login">Login</Link>
                        }
                        {
                            !currentUser && <Link className="nav-link  text-white" to="/sign-up">Sign up</Link>
                        }
                        {
                            currentUser && (
                                <div className='d-flex'>
                                    <button className='btn btn-dark text-white' onClick={handleLogout}>LogOut</button>
                                </div>
                                
                            )
                        }
                    </div>
                    
                    
                </nav>
            </div>
        </div>
    )
}

export default Header