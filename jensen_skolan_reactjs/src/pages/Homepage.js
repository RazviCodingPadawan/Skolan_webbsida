// ARTUR sida

import '../styles/Homepage.css'
import React from 'react';
import Study from '../pictures/study.png';

const Homepage = () => {
    return (
        <>
        <main>
                <div className="container">
                    <div className="about">
                        <h1>De bästa onlinekursplattformarna</h1>
                        <h3>För dig som vill göra något lärorikt och kreativt på fritiden.</h3>
                        <div className="text_content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Vel suscipit ipsa iste aliquid illum blanditiis vero esse culpa?Cupiditate iusto odit vel illum atque nesciunt animi libero velit explicabo reprehenderit.Et, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit.Vel suscipit ipsa iste aliquid illum blanditiis vero esse culpa?</p>
                        </div>
                        <button className="about_btn">Läs mer</button>
                    </div>
                    <div className="picture">
                        <img className='main_picture' src= {Study} alt="main_picture"></img>
                    </div>
                </div>
            </main></>
    )
}

export {Homepage}

//ARTUR