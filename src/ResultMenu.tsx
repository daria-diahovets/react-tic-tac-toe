export default function ResultMenu() {
  return (
    <div className="absolute top-0 h-screen w-screen z-10">
      <div className="fixed left-0 top-0 h-full w-full bg-black/50 backdrop-blur"></div>
      <div className="absolute w-[85%] h-auto sm:w-[550px] sm:h-[323px] py-[7vw] sm:py-[40px] flex flex-col items-center justify-center bg-black/10 backdrop-blur border-white/50 border rounded-[25px] sm:rounded-[40px] center-align">
        <h3 className="text-center text-[4.5vw] sm:text-[28px] text-shadow font-bold">
          Game Over
        </h3>
        <h2 className="text-center text-[7.5vw] sm:text-[48px] text-shadow font-bold">
          🏆 You Won 🏆
        </h2>
        <button className="text-center w-[40%] py-[10px] sm:w-[220px] text-[4.5vw] sm:text-[28px] border border-white/50 rounded-[8px] sm:rounded-[10px] text-shadow font-bold block mt-[3vw] sm:mt-[20px] cursor-pointer hover:scale-[1.05] active:scale-[.95] transition">
          Repeat
        </button>
      </div>
    </div>
  );
}
