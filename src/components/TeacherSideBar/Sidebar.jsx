import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { IconContext } from 'react-icons';


import SideBArData from "./SideBarData";
import "../../assets/styles/sidebar.css";

import { Link } from "react-router-dom";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const hideSidebar = () => setSidebar(!sidebar);

  return (
    <>
     <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={hideSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={hideSidebar} />
            </Link>
          </li>
          {SideBArData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

            <div style={{marginTop:"500px"}} className="nav-text">
                <a href="">
                    <FaIcons.FaRegUserCircle/>
                <span>Teacher Name</span>
                </a>
                
            </div>

          <li className="nav-text" >
            
            <a href="">
                <FiIcons.FiLogOut />
              <span>Logout</span>
            </a>
              
            
          </li>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
