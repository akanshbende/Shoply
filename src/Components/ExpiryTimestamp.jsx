import { IconButton } from "@mui/material";
import React from "react";
// import { useStopwatch } from "react-timer-hook";
// import { useTimer } from "react-timer-hook";
// import { useTime } from "react-timer-hook";
import { useStopwatch } from "react-timer-hook";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }} className="">
        <p className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">{hours}</p>
        :
        <p className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
          {minutes}
        </p>
        :
        <p className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
          {seconds}
        </p>
      </div>
    </div>
  );
}
function ExpiryTimestamp() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default ExpiryTimestamp;
