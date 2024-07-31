import { Prize } from "@/interface/Prize";
import { Task } from "@/interface/Task";
import { getScore, ShowItem } from "@/util";
import { useEffect, useState } from "react";

type TaskTimerProps = {
  task: Task;
  toShow: string;
  onCheck?: (score: number) => void;
};

const TaskTimer = ({ task, toShow, onCheck = () => {} }: TaskTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(task.timeToComplete * 60); // convert minutes to seconds
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setTimeout(() => {
        const newScore: number = getScore(task.difficultyLevel);
        onCheck(newScore);
        setIsChecked(false);
      }, 2000);
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => {
      if (!prevState) {
      }
      return !prevState;
    });
  };

  useEffect(() => {
    setTimeLeft(task.timeToComplete * 60);
    if (toShow === ShowItem.chosen) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [task.name]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-4 bg-gray-200 rounded flex  justify-between items-center  md:flex-col md:items-start ">
      <div className="flex flex-col gap-2">
        <div className="">
          <span className="font-bold">task: </span>
          {task.name}
        </div>{" "}
        <div className="">
          <span className="font-bold">difficultyLevel : </span>
          {task.difficultyLevel}
        </div>
        <div>
          <span className="font-bold">category : </span>
          {task.category}
        </div>
        <p className={`${isChecked && "invisible"} text-xl`}>
          {formatTime(timeLeft)}
        </p>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`${
            ShowItem.chosen !== toShow && "invisible"
          } w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-4`}
        />
      </div>
    </div>
  );
};
export default TaskTimer;
