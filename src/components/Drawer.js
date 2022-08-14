import React from "react";
import { SwipeableDrawer } from "@mui/material";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  logo,
  ...props
}) {
  return (
    <>
      <SwipeableDrawer
        anchor={placement}
        open={open}
        width={width}
        onClose={toggleHandler}
        onOpen={toggleHandler}
      >
        {closeButton && (
          <div onClick={toggleHandler} className={closeBtnStyle}>
            {logo && logo} {closeButton}
          </div>
        )}
        <div className={drawerStyle}>{children}</div>
      </SwipeableDrawer>
      <div style={{ display: "inline-block" }} onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
}

Drawer.defaultProps = {
  placement: "left",
};
