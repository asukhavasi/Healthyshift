import React from 'react'
import { Link,NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <Link to={'/'} className='logo-link'>
                <div className="logo">
                    {/* <img src="#" alt="image" /> */}
                    <h2>HealthyShift</h2>
                </div>
                </Link>
                <div className="additionalnavtitles">
                    <div className='title'><h3>SignIn/SignUp</h3></div>
                    <NavLink to='/about' className={({isActive})=> isActive? 'logo-link active':'logo-link'}>
                        <div className='title'><h3>About</h3></div>
                    </NavLink>
                    <div className='title'><h3>Contact Us</h3></div>

                </div>
            </div>
        </>
  )
}



export default Navbar