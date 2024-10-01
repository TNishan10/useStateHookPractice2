import React from "react";
import { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function newTime() {
    const updateTime = new Date().toLocaleTimeString();
    setTime(updateTime);
  }

  setInterval(newTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
