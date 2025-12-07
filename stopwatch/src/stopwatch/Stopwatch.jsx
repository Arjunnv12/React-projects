import { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };
  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  const reset = () => {
    stop();
    setTime(0);
  };
  const minute = Math.floor(time / 60000);
  const second = Math.floor((time % 600000) / 1000);
  const hun = Math.floor((time % 1000) / 10);
  const pad = (num) => String(num).padStart(2, "0");
  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="timedisplay">
        <span className="time-unit">{pad(minute)}</span>
        <span className="colon">:</span>
        <span className="time-unit">{pad(second)}</span>
        <span className="colon">:</span>
        <span className="time-unit">{pad(hun)}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Stopwatch;
