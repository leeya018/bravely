import { Prize } from "@/interface/Prize";
import { useState, useEffect } from "react";

type PrizeItemProps = {
  updatePrize: (prize: Prize | null) => void;
  prize: Prize;
};
const PrizeItem = ({ prize, updatePrize }: PrizeItemProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPrize = loadPrize();
      if (savedPrize) {
        updatePrize(savedPrize);
      } else {
        updatePrize(null); // Clear the prize if 5 minutes have passed
      }
    }
  }, []);

  const loadPrize = (): Prize | null => {
    const prizeData = localStorage.getItem("prize");
    const prizeTimestamp = localStorage.getItem("prizeTimestamp");

    if (prizeData && prizeTimestamp) {
      const savedTime = parseInt(prizeTimestamp);
      const currentTime = new Date().getTime();
      const minutesPassed = (currentTime - savedTime) / (1000 * 60); // Convert milliseconds to minutes

      // 100 = > minuts
      if (minutesPassed < 0.1) {
        return JSON.parse(prizeData);
      } else {
        updatePrize(null); // Clear the prize if 5 minutes have passed
        localStorage.removeItem("prize");
        localStorage.removeItem("prizeTimestamp");
      }
    }

    // If no prize data or more than 5 minutes have passed, return null
    return null;
  };

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-8">
      {prize ? (
        <>
          <h2 className="text-xl font-bold mb-2">Congratulations!</h2>
          <p className="text-lg">You just won a prize!</p>
          <p className="text-2xl font-semibold mt-4">{prize.name}</p>
          <p className="mt-2">Score: {prize.score}</p>
        </>
      ) : (
        <p>No prize available or prize expired.</p>
      )}
    </div>
  );
};

// Helper functions (awardPrize, loadPrize, clearPrize) would be included here as shown above

export default PrizeItem;
