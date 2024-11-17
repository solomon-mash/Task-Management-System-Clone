import React from 'react';
import './progress.css';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Progress =()=>{
    return(
        <div className='progress-window'>
            <div className='project-progress'>
            <div className='project-header'>
                <p> Work Progress</p>
                <a href='home'> See All </a>
                </div>
            <div className='tasks'>
                <div className='task1'>
                    <small id="descriptor"> Ongoing Project </small>
                    <h2 id="task-name"> DashBoard Design </h2>
                    <LinearProgress style={{height: '10px', borderRadius: '15px'}} variant="determinate" value={90} />
                    <p> 90% complete </p>
                    <br />
                    <hr />
                    <div className='task-duration'>
                    <p id="descriptor"> Start Date: 10 Jan </p><p id='descriptor'> End date: 29 Jan </p>
                    </div>
                    </div>
                <div className='task2'>
                <small id="descriptor"> Ongoing Project </small>
                <h2 id="task-name"> App UI UX Design</h2>
                <Box sx={{ width: '100%'}}>
                <LinearProgress style={{height: '10px', borderRadius: '15px'}}variant="determinate" value={30} 
                    sx={{
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'pink', 
          
          
        },
      }}
                />
                </Box>
                    <p> 30% complete </p>
                    <br />
                    <hr />
                    <div className='task-duration'>
                    <p id="descriptor"> Start Date: 10 Jan </p><p id='descriptor'>  End date: 29 Jan </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="working-status">
            <div className='status-title'>
            <p id="status-header">Members Working  </p>
            </div>
            <div className='display-progress'>
            <div className='circular-bar'>
                <CircularProgressbar value={66} text="66%" />
</div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Progress