import React from 'react'
import './Sidebar.css'
import {SidebarData} from './backend/SidebarData'



function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {SidebarData.map((val, key) => {
                    return (
                    <li 
                    key={key}
                    className="sidebar__row" 
                    id={window.location.pathname === val.link ? "active" : ""}  
                    onClick={()=> {
                        window.location.pathname = val.link
                        }}
                        >
                        {" "}
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                    );
                })}
            </ul>
            <a href="https://ko-fi.com/L4L21CS3TQ" target="_blank" rel="noopener noreferrer">
      <img
        src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
        alt="Buy Me a Coffee at ko-fi.com"
        style={{
          border: '0px',
          height: '36px',
          position: 'fixed',
          left: '10px',
          bottom:'20px'
        }}
      />
    </a>
        </div>
    );
}


export default Sidebar