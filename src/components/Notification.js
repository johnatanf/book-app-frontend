import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Notification = props => {
  return (
    <Alert 
      className={`${!props.notification.message ? 'invisible' : ''} mt-3`} 
      variant={`${props.notification.success ? 'primary' : 'danger'}`}
    >
      { props.notification.message }
    </Alert>
  )
}

export default Notification;