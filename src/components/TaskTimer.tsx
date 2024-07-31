import { useEffect, useState } from "react";

type TaskTimerProps = {
  name: string;
  timeToComplete: number;
  isStart: boolean;
};

const TaskTimer = ({ name, timeToComplete, isStart }: TaskTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(timeToComplete * 60); // convert minutes to seconds

  useEffect(() => {
    setTimeLeft(timeToComplete * 60);
    if (isStart) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [name]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-4 bg-gray-200 rounded">
      <p>{name}</p>
      <p className="text-xl">{formatTime(timeLeft)}</p>
    </div>
  );
};
export default TaskTimer;
