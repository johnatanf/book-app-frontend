import React from 'react';
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Notification = props => {
  return (
    <div className="notification notification--info">
      <IcomoonReact className="notification__icon" iconSet={iconSet} icon="books" />
      <p className="notification__message">{ props.notification.message ? props.notification.message : '&nbsp;' }</p>
    </div>
  )
}

export default Notification;