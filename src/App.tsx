import ControlBtns from "./ControlBtns";
import TicTacToe from "./TicTacToe";
// import ResultMenu from "./ResultMenu";

function App() {
  return (
    <section className="flex flex-col min-h-screen items-center px-[25px]">
      <ControlBtns />
      <h1 className="mt-[18vh] sm:mt-[180px] text-[6vw] sm:text-[36px] font-bold text-shadow mb-[5vh] sm:mb-[52px]">
        👾 Tic Tac Toe Game 👾
      </h1>
      <TicTacToe />
      {/* <ResultMenu /> */}
      <a
        className="text-[4vw] sm:text-[20px] opacity-50 mb-[3vh] text-shadow sm:mb-[35px] hover:underline mt-auto"
        target="_blank"
        href="https://t.me/drzoidberg_portfolio"
      >
        @dczoidberg
      </a>
    </section>
  );
}

export default App;
