import React from 'react';
import history from "./../history";
import './Welcome.css';
const Welcome = () =>{
    const onNext = ()=>{
        history.push('/Birthday')
    }
    return(
        <div className="home">
        <p> Hi Dear </p>
        <p>This is my unique gift for your birtday. I think you may like this.</p>
        {/* <BirthdayScreen/> */}
        <button className='btn-landing' onClick={onNext}>Let's Go</button>
        {/* <Link to= "/Components/BirthdayScreen" >Let's Go </Link> */}
        </div>
    )
}
export default Welcome;