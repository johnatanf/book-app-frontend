import React from 'react';
import Notification from '../Notification';

const Content = (props) => {
  return (
    <div className="content">
      <Notification notification={props.notification} />
      {props.children}
    </div>
  )
}

export default Content;