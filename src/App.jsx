// import React from 'react'
// import Appearance from './component/Appearance'
// const App = () => {
//   return (
//     <div>
//       <Appearance/>
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState("center");

  const handleClick = () => {
    if (position === "start") {
      setPosition("center");
    } else if (position === "center") {
      setPosition("end");
    } else {
      setPosition("start");
    }
  };

  return (
    <div className="container">
      <div className="line"></div>
      <div className={`ball ${position}`}></div>
      <button onClick={handleClick}>Change Position</button>
    </div>
  );
};

export default App;
