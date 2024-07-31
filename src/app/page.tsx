"use client";

import TaskTimer from "@/components/TaskTimer";
import { Task } from "@/interface/Task";
import { taskItems } from "@/util.";
import React, { useState } from "react";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>(taskItems);
  const [randInd, setRandInd] = useState<number>(0);
  const [toShow, setToShow] = useState<string>("chosen");

  const addTask = () => {
    const newTask: Task = {
      name: `Task ${tasks.length + 1}`,
      timeToComplete: 5,
      difficultyLevel: "Easy",
      category: "Social",
    };
    setTasks([...tasks, newTask]);
  };

  const chooseRandInd = () => {
    setToShow("chosen");
    setRandInd(Math.floor(Math.random() * taskItems.length));
  };
  return (
    <div>
      <div className="p-4">
        <div className="flex gap-3">
          <button
            onClick={chooseRandInd}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Change task
          </button>
          <button
            onClick={() => setToShow("list")}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show List
          </button>
          <button
            onClick={addTask}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Task
          </button>
        </div>
        {toShow === "list" && (
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <TaskTimer
                isStart={false}
                key={index}
                name={task.name}
                timeToComplete={task.timeToComplete}
              />
            ))}
          </div>
        )}

        {toShow === "chosen" && (
          <div>
            <div>{tasks[randInd].name}</div>
            <TaskTimer
              isStart={true}
              name={tasks[randInd].name}
              timeToComplete={tasks[randInd].timeToComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
}
