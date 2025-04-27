import { useState, useEffect, useRef } from "react";

export default function ControlBtns() {
  const [isMusicOn, setIsMusicOn] = useState<boolean>(false);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);

  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    musicRef.current = new Audio("sounds/music.mp3");
    musicRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!musicRef.current) return;

    if (isMusicOn) {
      musicRef.current.play().catch((e) => console.error(e));
    } else {
      musicRef.current.pause();
    }
  }, [isMusicOn]);

  useEffect(() => {
    const handleClick = () => {
      if (!isSoundOn) return;
      const clickSound = new Audio("sounds/click.mp3");
      clickSound.play().catch((e) => console.error(e));
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isSoundOn]);

  const toggleMusic = () => {
    setIsMusicOn((prev) => !prev);
  };
  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  return (
    <div className="flex gap-[15px] absolute top-[25px] left-[25px] ">
      <button
        onClick={toggleMusic}
        className="flex items-center justify-center w-[45px] sm:w-[50px] aspect-square border rounded-[10px] border-white/50 cursor-pointer transition hover:scale-[1.05] active:scale-[.95] bg-black/20"
      >
        {isMusicOn ? <img src="/music.svg" alt="music btn" /> : <img src="/music-off.svg" alt="music btn" />}
      </button>
      <button
        onClick={toggleSound}
        className="flex items-center justify-center w-[45px] sm:w-[50px] aspect-square border rounded-[10px] border-white/50 cursor-pointer transition hover:scale-[1.05] active:scale-[.95] bg-black/20"
      >
        {isSoundOn ? <img src="/sound.svg" alt="sound btn" /> : <img src="/sound-off.svg" alt="sound btn" />}
      </button>
    </div>
  );
}
