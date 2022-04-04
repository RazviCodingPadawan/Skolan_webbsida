// ARTUR sida

import {Link, Outlet} from 'react-router-dom'
import React from 'react';
import logo from '../pictures/logo.png';

const Layout = () => {
    return (
        <>
        <header>
            <div className="logo">
                <img className="logo_picture" src={logo} alt="logo_picture" width="120px"></img>
                <h2>Jensen skola</h2>
            </div>
            <div className="navbar">
                <ul>
                <Link to ='/'>Hemsida</Link>
                <Link to ='/personal'>Personal</Link>
                <Link to ='/courses'>Kurser</Link>
                <Link to ='/educations'>Utbildningar</Link>
                <Link to ='/apply'><span>Ansökan</span></Link>
                </ul>
            </div>
        </header>

            <Outlet />

            <footer>Stockholm @ RED-Moon.se</footer>
        </>
    )
}

export {Layout}

// ARTUR