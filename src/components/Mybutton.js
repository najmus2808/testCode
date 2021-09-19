import * as React from "react";
import Button from "@mui/material/Button";

let btnStyle = {
  minWidth: "294px",
  minHeight: "44px",
};

export default function BasicButtons({ label, className, ...rest }) {
  return (
    <Button
      style={btnStyle}
      className={className}
      {...rest}
      variant="contained"
    >
      {label}
    </Button>
  );
}
