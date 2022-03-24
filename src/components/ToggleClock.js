import { useRef, useEffect } from "react";
import { PauseSvg } from "../svg/PauseSvg";
import { PlaySvg } from "../svg/PlaySvg";
import { MainBtnStyled } from "./styled_components/MainBtnStyled";
import clickSound from "../audio/click.mp3";

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
        var audio = new Audio(clickSound);
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
