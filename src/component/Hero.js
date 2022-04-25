import React from 'react';
import heroImg from '../images/airbnb2.jpg'
export default function Hero(){
    return(
        <section>
            <img className='hero--img' src={heroImg} alt='' />
        </section>
    )
}