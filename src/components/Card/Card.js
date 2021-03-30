import React from 'react';
import Content from './Content';
import Nav from './Nav';

const Card = (props) => {
  return (
    <div className="card">
      <Nav />
      <Content />
    </div>
  );
}

export default Card;
