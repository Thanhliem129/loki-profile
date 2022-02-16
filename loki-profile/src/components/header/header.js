import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className='container'>
            <div className='bg-info'>
                <nav className="nav nav-tabs nav-stacked">
                    <Link className="nav-link active" to="/">Home page</Link>
                    <Link className="nav-link" to="/posts">Post</Link>
                    <Link className="nav-link " to="#">Disabled link</Link>
                    <Link className="nav-link " to="#">Disabled link</Link>
                    <Link className="nav-link " to="/sign-up">Sign up</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header