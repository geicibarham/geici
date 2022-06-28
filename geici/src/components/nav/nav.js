import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";

import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';



function Nav() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  </style>

  return (

    <nav id="main-nav">
      <h4 id="title">
       
        <NavLink style={{fontWeight:"lighter"}}
         id="coffee" className="titleBtnLink" to="/">
          Geiciane Barham
        </NavLink>

      </h4>

      <ul id="nav-list">
        <Dropdown title="Dropdown button">
          <Dropdown.Toggle style={{ color: "white" }}
            variant="" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/main">Feed</Dropdown.Item>

     


         

          </Dropdown.Menu>
        </Dropdown>



  
      </ul>
    </nav>

  );
}

export default Nav;
