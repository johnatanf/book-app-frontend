import React from 'react';
import Navbar from 'react-bootstrap/NavBar';

const Footer = props => {

  return (
    <Navbar 
      bg="light" 
      variant="light" 
      className='d-flex justify-content-center align-items-center fixed-bottom'
    >
      <span style={{ fontSize: '12px' }}>Johnatan Fallen || view my portfolio <a href='#'>here</a>.</span>
    </Navbar>
  )
}

export default Footer;