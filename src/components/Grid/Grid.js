import React from "react";
import classnames from "classnames";
import "./Grid.scss";

const Container = ({ className, children, gutter }) => (
  <div
    className={classnames("lx-grid-container", className)}
    style={{
      gridGap: gutter
    }}
  >
    {children}
  </div>
);

const Item = ({ children, className, height, width, xs, sm, md }) => (
  <div
    className={classnames(
      "lx-grid-item",
      className,
      {
        [`col-size-xsmall-${xs}`]: xs,
        [`col-size-small-${sm}`]: sm,
        [`col-size-medium-${md}`]: md,
        [`col-size-${width}`]: width
      },
      { [`row-height-${height}`]: height }
    )}
  >
    {children}
  </div>
);

const Grid = props => (
  <React.Fragment>
    {props.container && <Container {...props} />}
    {props.item && <Item {...props} />}
  </React.Fragment>
);

export default Grid;
