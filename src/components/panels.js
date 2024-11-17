import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faEye, faTasks, faHistory, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import './panel.css';


const panel =()=>{
return (
    <div className='sidebar-div'>
    <a href="dashboard"> <FontAwesomeIcon style={{fontSize: '18px'}} icon={faThLarge} /> Dashboard </a> 
    <a href="tracking"><FontAwesomeIcon style={{fontSize: '18px'}} icon={faEye} />  Tracking </a>   
    <a href="projects"><FontAwesomeIcon style={{fontSize: '18px'}} icon={faTasks} />  Projects </a>   
    <a href="history"><FontAwesomeIcon style={{fontSize: '18px'}} icon={faHistory} /> Work History </a>  
    <p style={{fontWeight: 'bold', fontSize: 14}}> Tools </p>

    <a href="inbox"><FontAwesomeIcon style={{fontSize: '18px'}} icon={faEnvelope} /> Inbox </a> 
    <a href="settings"> <FontAwesomeIcon style={{fontSize: '18px'}} icon={faCog} />  Settings </a>
    </div>
)
}
export default panel