export type Task = {
  name: string;
  timeToComplete: number; // Time in minutes
  difficultyLevel: "Easy" | "Medium" | "Hard";
  category: "Social" | "Creative" | "Physical" | "Self-Care";
};
