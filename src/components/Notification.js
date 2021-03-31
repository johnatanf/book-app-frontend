import React from 'react';
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Notification = props => {
  return (
    <div 
      className={`notification ${props.notification.status === 'success' 
                                ? 'notification--success' 
                                : props.notification.status === 'failure'
                                ? 'notification--failure'
                                : 'notification--info'} 
                               ${!props.notification.message 
                                ? 'notification--invisible' 
                                : ''}`}
    >
      <IcomoonReact 
        className="notification__icon" 
        iconSet={iconSet} 
        icon={`${props.notification.status === 'success' 
               ? 'checkmark' 
               : props.notification.status === 'failure'
               ? 'warning'
               : 'info'}`} 
      />
      <p className="notification__message">{ props.notification.message ? props.notification.message : '&nbsp;' }</p>
    </div>
  )
}

export default Notification;