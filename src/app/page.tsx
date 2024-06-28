import { addColorToSequence } from "@/reducers/actions";
import { gameReducer } from "@/reducers/game";
import { COLORS } from "@/util";
import React from "react";
import { connect } from "react-redux";

export default function SimonPage() {
  // const {} = gameReducer()
  const startGame = () => {
    const rand = Math.floor(Math.random() * 4);
    addColorToSequence(COLORS[rand]);
  };
  return (
    <section>
      <h1>simon</h1>
      <button onClick={startGame}>start game</button>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2">
          <button className="p-2 bg-red-500 h-40 w-40"></button>
          <button className="p-2 bg-blue-500 h-40 w-40"></button>
          <button className="p-2 bg-green-500 h-40 w-40"></button>
          <button className="p-2 bg-yellow-500 h-40 w-40"></button>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addColorToSequence,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimonPage);
