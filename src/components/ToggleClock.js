import { useRef, useEffect } from "react";
import { PauseSvg } from "../svg/PauseSvg";
import { PlaySvg } from "../svg/PlaySvg";
import { MainBtnStyled } from "./styled_components/MainBtnStyled";
import clickSound from "../audio/click.mp3";

var audio = new Audio(clickSound);

const ToggleClock = ({ isRunning, toggleClock }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <MainBtnStyled
      title={isRunning ? "Pause" : "Play"}
      id="start_stop"
      onClick={() => {
        console.log("Play");
        if (!audio.paused) {
          audio.currentTime = 0;
        }
        audio.play();
        toggleClock();
      }}
      ref={btnRef}
    >
      {isRunning ? <PauseSvg /> : <PlaySvg />}
    </MainBtnStyled>
  );
};

export default ToggleClock;
