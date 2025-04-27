export default function GameContainer() {
  return (
    <div className="relative grid grid-cols-3 grid-rows-3 justify-center w-full sm:w-[550px] aspect-square bg-black/20 rounded-[25px] sm:rounded-[50px] backdrop-blur-[50px] sm:backdrop-blur-[100px] border-1 border-white/50">
      <div id="vertical-line" className="left-[34%]"></div>
      <div id="vertical-line" className="right-[34%]"></div>
      <div data-intex="0" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] flex items-center justify-center text-shadow select-none cursor-pointer">x</div>
      <div data-intex="1" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] flex items-center justify-center text-shadow select-none cursor-pointer">o</div>
      <div data-intex="2" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] flex items-center justify-center text-shadow select-none cursor-pointer">x</div>
      <div data-intex="3" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-4 flex items-center justify-center text-shadow select-none cursor-pointer">o</div>
      <div data-intex="4" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-4 flex items-center justify-center text-shadow select-none cursor-pointer">x</div>
      <div data-intex="5" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-4 flex items-center justify-center text-shadow select-none cursor-pointer">o</div>
      <div data-intex="6" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-5 flex items-center justify-center text-shadow select-none cursor-pointer">x</div>
      <div data-intex="7" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-5 flex items-center justify-center text-shadow select-none cursor-pointer">o</div>
      <div data-intex="8" className="text-[24vw] sm:text-[150px] leading-[24vw] sm:leading-[150px] pb-5 flex items-center justify-center text-shadow select-none cursor-pointer">x</div>
      <div id="horizontal-line" className="top-[34%]"></div>
      <div id="horizontal-line" className="bottom-[34%]"></div>
    </div>
  );
}