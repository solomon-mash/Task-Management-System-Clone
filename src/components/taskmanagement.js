import React from 'react';
import './task.css';
import calendarpng from './calendar.png';

const taskmanager=()=>{

    return (
        <div className='main-div'>
            <div className='description'>
            <p style={{color: '#b6b6b6' }}> Welcome To </p>
            <p id = "description-body" style={{fontWeight: 'bold'}}> Your Task Management Area </p>
            <p id="descriptive-text"> Lorem Ipsum color sit amet Consecutor Linreanium risus uma totor proscent.</p>
            <button type="submit" className='description'> Learn More </button>
            </div>
            <div className='description-image'>
            <img src={calendarpng} className="img-clasa" alt="logo"/>
            
            </div>
        </div>
    )
}
export default taskmanager