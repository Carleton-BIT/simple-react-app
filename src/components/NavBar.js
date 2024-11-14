import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Tasks</Link></li>
                    <li><Link to='/about'>About the Developer</Link></li>
                    <li><a href="https://google.ca">Google</a></li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar;