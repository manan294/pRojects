import React, { useEffect, useRef } from "react";
import { animateBox } from "../animations/GsapAnimations";
import "../styles/Page.css";

const Page = () => {
  const boxRef = useRef(null); // ✅ Define the ref

  useEffect(() => {
    animateBox(boxRef.current); // ✅ Use the ref correctly
  }, []);

  return (
    <div>
      <div id="box" ref={boxRef}></div> {/* ✅ Attach ref to the element */}
      <h1>This is Page</h1>
    </div>
  );
};

export default Page;
