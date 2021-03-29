import React from 'react';

const Notification = props => {
  return (
    <div>
      { props.notification.message ? props.notification.message : '&nbsp' }
    </div>
  )
}

export default Notification;