import React, { useRef } from "react";
import Scrollbar from "react-smooth-scrollbar";

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  return (
    <Scrollbar ref={ref} damping=".059">
      {children}
    </Scrollbar>
  );
}
