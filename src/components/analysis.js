import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner, faClock } from '@fortawesome/free-solid-svg-icons';
import './analysis.css';

const taskanalysis = ()=>{
 return (
    <div className='list-task'>
        <div class="totaltasks">
        <div class="tasks-icon">
        <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: '30px', color: 'white'}}/>
        </div>
        <div className='classContent'>
        <p id='header'> 1220</p>
        <p> Total Task </p>
    </div>
        </div>
        <div className='list-progress'>
        <div class="tasks-icon">
        <FontAwesomeIcon icon={faSpinner} style={{fontSize: '30px', color: 'white'}}/>
        </div>
        <div className='classContent'>
        <p id='header'> 07 </p>
        <p> InProgress</p>
        </div>
        </div>
        <div className='pending'>
        <div class="tasks-icon">
        <FontAwesomeIcon icon={faClock} style={{fontSize: '30px', color: 'white'}}/>
        </div>
        <div className='classContent'>
        <p id='header'> 43 </p>
        <p> Pending </p>
        </div>
        </div>
        <div className='completed'>
        <div class="tasks-icon">
        <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: '30px', color: 'white'}}/>
        </div>
        <div className='classContent'>
        <p id='header'> 1550 </p>
        <p> completed </p>
        </div>
        </div>
    </div>
 )
}
export default taskanalysis