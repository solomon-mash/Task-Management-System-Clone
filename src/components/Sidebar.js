import React, { useState, useEffect } from 'react';
import './CollapsibleDrawer.css';
import Panel from './panels'
import Bottom from './bottompanel';
import './sidebar.css'

function CollapsibleDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth > 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 968);

  const handleResize = () => {
    if (window.innerWidth > 1068) {
      setIsSmallScreen(false);
      setIsDrawerOpen(true); 
    } else {
      setIsSmallScreen(true);
      setIsDrawerOpen(false); 
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div>
      {isSmallScreen && (
        <button className="menu-icon" onClick={toggleDrawer}>
          {isDrawerOpen ? "☰" : "☰"} 
        </button>
      )}
      <div className={`drawer ${isDrawerOpen ? "open" : "closed"}`}>
      <div className="drawer-content">
      <p style={{fontWeight: 'bold', fontSize: 14}}> Project</p>
        <div className='dropbtn'>
        <select name = "projects-list">
            <option value="option1"> Project 1 </option>
            <option value="option2"> Project 2 </option>
            <option value="option3"> Project 3</option>
        </select> 
        
    </div>
     
</div>
<Panel />
<Bottom />
      </div>
    </div>
  );
}

export default CollapsibleDrawer