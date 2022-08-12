import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './MainMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MainMenu() {
    return (
      <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-button-dark-example1">
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="/login" active>
            Login
          </Dropdown.Item>
          <Dropdown.Item href="/subscribe">Subscribe</Dropdown.Item>
          <Dropdown.Item href="/register-user">Create Account</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">About</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    );
  }
  

export default MainMenu;