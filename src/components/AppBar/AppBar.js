import React from "react";
import "./AppBar.scss";

const AppBar = ({ logo, title }) => (
  <div className="app-bar">
    <div
      className="logo"
      style={{ backgroundImage: logo ? `url('${logo}')` : undefined }}
    />

    {title ? (
      <div className="app-bar-title">{title}</div>
    ) : (
      <div className="app-bar-title">
        light<span className="app-bar-title-highlight">house</span>
      </div>
    )}
  </div>
);

export default AppBar;
