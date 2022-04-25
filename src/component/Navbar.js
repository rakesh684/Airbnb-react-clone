import React from 'react';
import air from '../images/airbnb.png'
export default function Navbar(){
    return(
       <div className='nav--items'>
            <img className='nav--icon' src={air}  alt='nav--icon'/>
       </div>
    )
}