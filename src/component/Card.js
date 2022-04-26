import React from 'react';
import img1 from '../images/airbnb3.png'
import img2 from '../images/rating-icon.jpeg'
import img3 from '../images/airbnb4.jpg';
import img4 from '../images/airbnb5.jpg'

export default function Card(){
    return(
        <section className='card-sections'>
            <div className='card-container'>
                <img className='card--img' src={img1} alt="" />
                <div className='rating-container'>
                <img className='card--star' src={img2} alt="" />
                 <p className='rating'>5.0 (6) .</p>
                 
                </div>
                <h1 className='card--item-content'>Life lessons with Katie Zaferes</h1>
                <h1 className='card--item-price'>From $136 / person</h1>
            </div>
            <div className='card-container'>
                <img className='card--img' src={img3} alt="" />
                <div className='rating-container'>
                <img className='card--star' src={img2} alt="" />
                 <p className='rating'>4.5 (10) .</p>
                </div>
                <h1 className='card--item-content'>Learn wedding photography</h1>
                <h1 className='card--item-price'>From $150 / person</h1>
            </div>
            <div className='card-container'>
                <img className='card--img' src={img4} alt="" />
                <div className='rating-container'>
                <img className='card--star' src={img2} alt="" />
                 <p className='rating'>5.0 (5) .</p>
                </div>
                <h1 className='card--item-content'>Group Mountain Biking</h1>
                <h1 className='card--item-price'>From $96 / person</h1>
            </div>
        </section>
    )
}