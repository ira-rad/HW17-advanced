import React, { useState, useEffect } from "react";
import "../App.css";

const Timer = () => {
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);

 
  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setTime(30);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    console.log(`Залишилось часу:  ${time}s`);

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : reset()));
      }, 1000);
    } else if (isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="wrapper">
      <div className="time">{time}s</div>
      <div className="row">
        <button
          className={`button ${isActive ? "active" : "inactive"}`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div
        className="timer-row"
        style={{ width: `calc(${time} * (100% / ${useState(30)}))` }}
      ></div>
    </div>
  );
};
export default Timer;
