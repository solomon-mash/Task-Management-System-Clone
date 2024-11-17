import React from 'react';
import './window.css';
import Dashboard from './dashboard';
import TaskManager from './taskmanagement';
import TaskAnalysis from './analysis';
import Graph from './graphical';
import Progress from './progress';


const window = ()=>{
    return (
        <div className='window-div'>
        <Dashboard />
        <TaskManager />
        <TaskAnalysis />
        <Graph />
        <Progress />
        
        </div>
    )
}
export default window