import JSConfetti from "js-confetti";
import { useState } from "react";
import ResultMenu from "./ResultMenu";

const WIN_CONDITIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [cells, setCells] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o">("x");
  const [status, setStatus] = useState<string>("X's turn");
  const [resultText, setResultText] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const handleCellClick = (index: number) => {
    if (!isRunning || cells[index] !== "") return;

    const updatedCells = [...cells];
    updatedCells[index] = currentPlayer;
    setCells(updatedCells);

    const jsConfetti = new JSConfetti();

    if (checkWinner(updatedCells)) {
      setResultText(`"${currentPlayer.toUpperCase()}" Wins!`);
      jsConfetti.addConfetti();
      setIsRunning(false);
    } else if (!updatedCells.includes("")) {
      setResultText("Draw!");
      jsConfetti.addConfetti();
      setIsRunning(false);
    } else {
      const nextPlayer: "x" | "o" = currentPlayer === "x" ? "o" : "x";
      setCurrentPlayer(nextPlayer);
      setStatus(`${nextPlayer.toUpperCase()}'s turn`);
    }
  };

  const checkWinner = (cells: string[]): boolean => {
    return WIN_CONDITIONS.some((condition) => {
      const [a, b, c] = condition;
      return cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c];
    });
  };

  const restartGame = () => {
    setCells(Array(9).fill(""));
    setCurrentPlayer("x");
    setStatus("X's turn");
    setIsRunning(true);
  };

  return (
    <>
      <div className="relative grid grid-cols-3 grid-rows-3 justify-center w-full sm:w-[550px] aspect-square bg-black/20 rounded-[25px] sm:rounded-[50px] backdrop-blur-[50px] sm:backdrop-blur-[100px] border-1 border-white/50">
        <div id="vertical-line" className="left-[34%]"></div>
        <div id="vertical-line" className="right-[34%]"></div>
        {cells.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="cell text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] flex items-center justify-center text-shadow select-none cursor-pointer"
          >
            {cell}
          </div>
        ))}
        <div id="horizontal-line" className="top-[34%]"></div>
        <div id="horizontal-line" className="bottom-[34%]"></div>
      </div>
      <p className="text-shadow text-[4vw] sm:text-[24px] mt-[35px] mb-[35px]">
        {status}
      </p>
      <ResultMenu
        resultText={resultText}
        resetGame={restartGame}
        isVisible={!isRunning}
      />
    </>
  );
}
