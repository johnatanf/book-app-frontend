import React from 'react';
import Content from './Content';
import CardNav from './CardNav';

const Card = (props) => {
  return (
    <div className="card">
      <CardNav user={props.user} />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

export default Card;