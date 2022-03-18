import React from 'react'

import '../styles/Personal.css'
import '../components/Layout'
import  './Contact'




const Personal =(props) => {
  return (
         <div className='personal_container'>
           <img src={`../pictures${props.img}`}/>
            <h3>{`${props.name}`}</h3>
              <p>{`${props.phone}`}</p>
                <p>{`${props.email}`}</p>
            </div>
          
    
    )
  }
  

  
export {Personal}