import React from 'react';
// import img1 from '../images/cat1.jpg'
// import img2 from '../images/cat2.jpg'
// import img3 from '../images/cat3.jpg'
// import img4 from '../images/cat4.jpg'
import phone from '../images/phone.jpg'
import email from '../images/email.png'

export default function Contacts(props){

    return(
           <div className='contact-card'>
               <img src={props.img} alt=''/>
               <h3>{props.name}</h3>
               <div className='info-group'>
                    <img src={phone} alt='' />
                    <p>{props.phone}</p>
               </div>
               <div className='info-group'>
                    <img src={email} alt='' />
                    <p>{props.email}</p>
               </div>
           </div>
           
    )
}