import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
const TaskTimeline = () => {
  const [date, setDate] = useState(new Date());

  const tasks = [
    { time: "10 AM", title: "Research",  color: "#1976d2" },
    { time: "11 AM", title: "Landing Page Design",  color: "#d32f2f" },
    { time: "12 PM", title: "Dashboard Design", color: "#388e3c" },
    { time: "1 PM", title: "Design Theory", color: "#ffa000" },
  ];

  return (
    <div className='calendar'>
      <div className='calendar-body' >
        <Calendar onChange={setDate} value={date} style={{marginBottom: '20px'}}/>
      </div>

      <div>
        <h3>Upcoming</h3>
        <p>{date.toDateString()}</p>
      </div>

      <div className='timeline'>
        {tasks.map((task, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ color: task.color }}>{task.time}</h4>
            <h3>{task.title}</h3>
            <p>{task.people}</p>
            <hr />
          </div>

        ))}
      </div>
    </div>
  );
};

export default TaskTimeline;
