import {NavLink, Outlet} from 'react-router-dom'
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
                <NavLink to ='/'>Hemsida</NavLink>
                <NavLink to ='/personal'>Personal</NavLink>
                <NavLink to ='/courses'>Kurser</NavLink>
                <NavLink to ='/educations'>Utbildningar</NavLink>
                <NavLink to ='/apply'><span>Ansökan</span></NavLink>
                </ul>
            </div>
        </header>

            <Outlet />

            <footer>Stockholm @ RED-Moon.se</footer>
        </>
    )
}

export {Layout}