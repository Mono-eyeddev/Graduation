import { useEffect, useState } from "react";

function getTimeParts(targetDate) {
  const diff = targetDate.getTime() - Date.now();
  const isPast = diff <= 0;
  const clamped = Math.max(diff, 0);

  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds, isPast };
}

// Ticks once per second and reports the remaining time until `isoDate`.
export function useCountdown(isoDate) {
  const targetDate = new Date(isoDate);
  const [time, setTime] = useState(() => getTimeParts(targetDate));

  useEffect(() => {
    if (time.isPast) return undefined;

    const interval = setInterval(() => {
      setTime(getTimeParts(targetDate));
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isoDate, time.isPast]);

  return time;
}
