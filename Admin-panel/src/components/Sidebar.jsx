import React from 'react'
import { BiBookAlt, BiHelpCircle, BiHome, BiMessage, BiSolidReport, BiStats, BiTask } from "react-icons/bi";
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <div className="mainmenu">
        <div className="logo">
          <BiBookAlt className="logo-icons" />
          <h3> Lockheed Sr-71 Blackbird</h3>
        </div>

        <div className="navlist">
          <a href="" id="D" className="items">
            <BiHome className="logo-icons" />
            Dashboard
          </a>
          <a href="" id="D" className="items">
            <BiTask className="logo-icons" />
            Assignment
          </a>
          <a href="" id="D" className="items">
            <BiSolidReport className="logo-icons" />
            Report
          </a>
          <a href="" id="D" className="items">
            <BiStats className="logo-icons" />
            Stats
          </a>
          <a href="" id="D" className="items">
            <BiMessage className="logo-icons" />
            Message
          </a>
          <a href="" id="D" className="items">
            <BiHelpCircle className="logo-icons" />
            Help
          </a>
          <a href="" id="D"></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
