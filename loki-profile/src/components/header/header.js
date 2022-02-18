import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")));
    const handleLogout = () => {
        localStorage.removeItem('user');
        setTimeout(() => {
            window.location.href = `/`
        }, 200);
    }
    return (
        <div className='container'>
            <div className='bg-info'>
                <nav className="nav nav-tabs nav-stacked">
                    <Link className="nav-link active" to="/">Home page</Link>
                    {
                        currentUser && <Link className="nav-link" to="/posts">Post</Link>
                    }
                    {
                       currentUser &&  <Link className="nav-link " to="/profile">Profile</Link>
                    }
                    {
                       !currentUser &&  <Link className="nav-link " to="/login">Login</Link>
                    }
                   
                    {
                        !currentUser && <Link className="nav-link " to="/sign-up">Sign up</Link>
                    }
                    {
                        currentUser && <button className='btn btn-info' onClick={handleLogout}>LogOut</button>
                    }
                    
                </nav>
            </div>
        </div>
    )
}

export default Header