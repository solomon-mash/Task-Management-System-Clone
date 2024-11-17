import React from 'react';
import './bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';

const bottom = ()=>{
    return (
        <div className='bottom-div'>
        <div className='new_task'>
        
            <button> <div className='button-class'>

            <FontAwesomeIcon icon={faCirclePlus}  />
            <p> Add New Task </p>
            </div></button>
            
            

        </div>
        <div className='userid'>
            <div className='user_card'>
                <p> Joe Henry </p>
            </div>
        </div>
    </div>
    ) 
}
export default bottom