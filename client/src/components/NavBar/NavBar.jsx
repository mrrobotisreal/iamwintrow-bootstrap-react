import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Logo
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}