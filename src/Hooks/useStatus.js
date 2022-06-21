import { useState } from "react";

const useStatus = (start, end) => {
  const [days, setDaysTime] = useState(0);
  const [hours, setHoursTime] = useState(0);
  const [minutes, setMinutesTime] = useState(0);
  const [status, setStatus] = useState("");

  let interval;

  const startTimer = () => {
    const startCountDown = new Date(start).getTime();
    const endCountDown = new Date(end).getTime();
    const now = new Date().getTime();
    const startDistance = startCountDown - now;
    const endDistance = endCountDown - now;

    interval = setInterval(() => {
      let distance;

      if (startDistance >= 0) {
        distance = startDistance;
      } else if (endDistance >= 0) {
        distance = endDistance;
      } else {
        distance = startDistance;
      }

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      if (startDistance <= 0) {
        if (endDistance <= 0) {
          clearInterval(interval?.current);
          setStatus("Ended");
        } else {
          setDaysTime(days);
          setHoursTime(hours);
          setMinutesTime(minutes);
          setStatus("Active");
        }
      } else {
        setDaysTime(days);
        setHoursTime(hours);
        setMinutesTime(minutes);
        setStatus("Upcoming");
      }
    }, 5000);
  };

  startTimer();


  return{ status, days, hours, minutes }
};

export default useStatus;
