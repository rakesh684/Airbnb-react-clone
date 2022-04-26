import React from 'react';
import heroImg from '../images/airbnb2.jpg'
export default function Hero(){
    return(
        <section className='hero--container'>
            <img className='hero--img' src={heroImg} alt='' />
            <h1 className='hero--head'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}