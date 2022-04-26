import React from 'react';
export default function Footer(){
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;
    if(hours<12){
        timeofDay = "morning"
    }
    else if (hours>=12 && hours <=17) {
        timeofDay="evening"
    } else {
        timeofDay="night"
    }
    return(
        <div >
            <h1>Good {timeofDay}!</h1>
        </div>
    )
}