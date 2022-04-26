import React from 'react';
import img2 from '../images/rating-icon.jpeg'
export default function Card(memo){
    return(
            <div className='card-container'>
                <img className='card--img' src={memo.img} alt="" />
                <div className='rating-container'>
                <img className='card--star' src={img2} alt="" />
                 <p className='rating'>{memo.p}</p>
                 
                </div>
                <h1 className='card--item-content'>{memo.h1}</h1>
                <h2 className='card--item-price'>{memo.h2}</h2>
            </div>
            
    )
}