import React from "react";
import './HappyWishes.css';
import logo192 from './img/logo192.jpg'
import history from "./../history";

function HappyWishes(){
    
    const onNext = ()=>{
        history.push('/Birthday')
    }
    return (
        <div className="wish">
           {/* <marquee behavior="slide" direction="left"> */}
           {/* <div className="bouncing">
              <p> HAPPY BIRTHDAY TO YOU </p>
            </div> */}
           <div className="night">
           <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
           </div>
          
           <div className="wish-main">
               <p>WISH YOU A HAPPY BIRTHDAY. MAY THIS YEAR WILL GIVE YOU ALL SUCCESS IN YOUR LIFE. </p>
               <img src = {logo192} alt="happy birthday" style={{width:'300px'}} />
               <button className='btn-wish' onClick={onNext}>Click Me</button>
            </div>
               {/* </marquee> */}
        </div>
    )
}

export default HappyWishes;