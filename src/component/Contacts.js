import React from 'react';
import img1 from '../images/cat1.jpg'
import img2 from '../images/cat2.jpg'
import img3 from '../images/cat3.jpg'
import img4 from '../images/cat4.jpg'
import phone from '../images/phone.jpg'
import email from '../images/email.png'

export default function Contacts(){
    return(
        <div className='contacts'>
           <div className='contact-card'>
               <img src={img1} alt='' />
               <h3>Mr. Akash Rajput</h3>
               <div className='info-group'>
                    <img src={phone} alt='' />
                    <p>9999999999</p>
               </div>
               <div className='info-group'>
                    <img src={email} alt='' />
                    <p>rkrajput89@gmail.com</p>
               </div>
           </div>
           <div className='contact-card'>
               <img src={img2} alt='' />
               <h3>Mr. Saurabh Maurya</h3>
               <div className='info-group'>
                    <img src={phone} alt='' />
                    <p>9999999999</p>
               </div>
               <div className='info-group'>
                    <img src={email} alt='' />
                    <p>smaratMessy99@gmail.com</p>
               </div>
           </div>
           <div className='contact-card'>
               <img src={img3} alt='' />
               <h3>Mr. Anup Chauhn</h3>
               <div className='info-group'>
                    <img src={phone} alt='' />
                    <p>9999999999</p>
               </div>
               <div className='info-group'>
                    <img src={email} alt='' />
                    <p>anupBeast100@gmail.com</p>
               </div>
           </div>
           <div className='contact-card'>
               <img src={img4} alt='' />
               <h3>Mr. Rakesh Kumar</h3>
               <div className='info-group'>
                    <img src={phone} alt='' />
                    <p>89104323375</p>
               </div>
               <div className='info-group'>
                    <img src={email} alt='' />
                    <p>dr.rakesh684@gmail.com</p>
               </div>
           </div>
        </div>
    )
}