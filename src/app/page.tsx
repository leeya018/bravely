"use client";

import PrizeItem from "@/components/PrizeItem";
import TaskTimer from "@/components/TaskTimer";
import { Prize } from "@/interface/Prize";
import { Task } from "@/interface/Task";
import { prizeItems, ShowItem, taskItems } from "@/util";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>(taskItems);
  const [randInd, setRandInd] = useState<number>(0);
  const [toShow, setToShow] = useState<string>(ShowItem.chosen);
  const [myScore, setMyScore] = useState<number>(0);
  const [hasStorage, setHasStorage] = useState<boolean>(false);

  const [prize, setPrize] = useState<Prize | null>(null);
  console.log("hello");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("myScore");
      setMyScore(savedScore ? parseInt(savedScore) : 0);
      setHasStorage(true);
    }
  }, []);

  useEffect(() => {
    debugger;
    // Save the score to localStorage whenever it changes
    if (hasStorage) {
      localStorage.setItem("myScore", myScore.toString());
      const newPrizes = prizeItems
        .sort((p1, p2) => p1.score - p2.score)
        .filter((p) => p.score < myScore);
      if (newPrizes.length > 0) {
        setPrize(newPrizes.slice(-1)[0]);
        if (!localStorage.getItem("prizeTimestamp"))
          awardPrize(newPrizes.slice(-1)[0]);
      }
    }
  }, [myScore, hasStorage]);

  const addToScore = (score: number) => {
    setMyScore((prev) => prev + score);
    chooseRandInd();
  };
  const chooseRandInd = () => {
    setToShow(ShowItem.chosen);
    setRandInd(Math.floor(Math.random() * taskItems.length));
  };

  const awardPrize = (prize: Prize) => {
    const currentTime = new Date().getTime();
    localStorage.setItem("prize", JSON.stringify(prize));
    localStorage.setItem("prizeTimestamp", currentTime.toString());
  };

  const updatePrize = (prize: Prize | null) => {
    setPrize(prize);
  };

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => {
            localStorage.clear();
            setMyScore(0);
          }}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
        <div className="text-xl font-semibold">Target Of Day : 10</div>
        <div className="mt-4 text-xl ">My Scroe : {myScore}</div>

        <div className="flex gap-3">
          <button
            onClick={chooseRandInd}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Change task
          </button>
          <button
            onClick={() => setToShow(ShowItem.list)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show List
          </button>
        </div>

        {/* prize card */}
        {/* {prize && <PrizeItem prize={prize} updatePrize={updatePrize} />} */}
        {toShow === ShowItem.list && (
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <TaskTimer toShow={toShow} key={index} task={task} />
            ))}
          </div>
        )}

        {toShow === ShowItem.chosen && (
          // {toShow === ShowItem.chosen && !prize && (
          <TaskTimer
            task={tasks[randInd]}
            toShow={toShow}
            onCheck={addToScore}
          />
        )}
      </div>
    </div>
  );
}
