import React from 'react';
import './dashboard.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const ResponsiveDashboard = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 968); 
      };
  
      handleResize(); 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  

  return (
    <div className="content">
      <div className="firstdiv">
        <p style={{ fontWeight: "bold", fontSize: "100%" }}>Dashboard</p>
        
      </div>
      
    <div className="search-div">
        {isSmallScreen ? (
          <>
            {showSearchInput ? (
              <div className="input-bar">
                <FontAwesomeIcon icon={faSearch}
                  size={20}
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => alert("Search triggered!")} 
                />
                <input
                  type="search"
                  placeholder="Search"
                  style={{
                    width: '100%',
                    height: '100%',
                    
                    flex: 1,
                    padding: "5px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                /> 
                <FontAwesomeIcon icon = {faTimes}
                  fontSize={22}
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => setShowSearchInput(false)} 
                />
              </div>
            ) : (
              <FontAwesomeIcon icon = {faSearch}
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => setShowSearchInput(true)} 
              />
            )}
          </>
        ) : (

          <div className='searchbar'>
          
          <input
            type="search"
                  placeholder="Search"
                  style={{
                    width: '100%',
                    height: '100%',
                    
                    flex: 1,
                    padding: "5px",
                    border: "hidden",
                    borderRadius: "8px"
            }}
          />
          <FontAwesomeIcon icon={faSearch}
                  size={20}
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => alert("Search triggered!")} // Add search functionality here
                />
          </div>
        )}
      </div>

      <div className="greeting">
      
      <button>Welcome</button>
      
        
      </div>
    </div>
  );
};

export default ResponsiveDashboard;
