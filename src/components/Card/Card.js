import React from "react";
import classnames from "classnames";
import "./Card.scss";

const Card = ({ children, title, alignCenter, theme }) => (
  <div className={classnames("report-card", { [`theme-${theme}`]: theme })}>
    {title && <div className="report-card-title">{title}</div>}
    <div
      className={classnames("report-card-content", {
        "centered-content": alignCenter
      })}
    >
      {children}
    </div>
  </div>
);

export default Card;
