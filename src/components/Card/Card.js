import React from 'react';
import Content from './Content';
import CardNav from './CardNav';

const Card = (props) => {
  return (
    <div className="card">
      <CardNav 
        user={props.user} 
        setUser={props.setUser}
        flashNotification={props.flashNotification} 
      />
      <Content notification={props.notification}>
        {props.children}
      </Content>
    </div>
  );
}

export default Card;
