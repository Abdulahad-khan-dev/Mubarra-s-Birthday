import { useEffect } from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const audio = new Audio("/music/love.mp3");

    audio.loop = true;
    audio.volume = 0.5;

    const playAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return null;
};

export default MusicPlayer;