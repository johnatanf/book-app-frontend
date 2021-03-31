import React from 'react';
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Notification = props => {
  return (
    <div className={`notification ${props.success ? 'notification--success' : } ${!props.notification.message ? 'notification--invisible' : ''}`}>
      <IcomoonReact className="notification__icon" iconSet={iconSet} icon={`${props.notification.success ? 'checkmark' : 'warning'}`} />
      <p className="notification__message">{ props.notification.message ? props.notification.message : '&nbsp;' }</p>
    </div>
  )
}

export default Notification;