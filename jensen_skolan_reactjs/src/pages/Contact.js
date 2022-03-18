import React from 'react'

import './Personal'

const Contact = () => {
    const Personal = {
        img:'img',
        name:'name',
        phone:'phone',
        email:'email',
    }
    return ( 
        <div className="contacts">
        <Personal
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 1"
                phone="08-111 111"
                email="Lärare1@skolan.com"
            />
        <Personal
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 2"
                phone="08-222 222"
                email="Lärare2@skolan.com"
            />
        <Personal
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 3"
                phone="08-333 333"
                email="Lärare3@skolan.com"
            />
        <Personal
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 4"
                phone="08-444 444"
                email="Lärare4@skolan.com"
            />
        <Personal 
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 5"
                phone="08-555 555"
                email="Lärare5@skolan.com"
            />
        <Personal
                img="../pictures/person-dummy.png" alt="dummy"
                name="Lärare 6"
                phone="08-666 666"
                email="Lärare6@skolan.com"
            />
    </div>



     )
}
 
export {Contact};