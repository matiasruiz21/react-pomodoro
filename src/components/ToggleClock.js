import { useRef, useEffect } from "react";
import { PauseSvg } from "../svg/PauseSvg";
import { PlaySvg } from "../svg/PlaySvg";
import { MainBtnStyled } from "./styled_components/MainBtnStyled";

const ToggleClock = ({ isRunning, toggleClock }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <MainBtnStyled
      title={isRunning ? "Pause" : "Play"}
      id="start_stop"
      onClick={() => toggleClock()}
      ref={btnRef}
    >
      {isRunning ? <PauseSvg /> : <PlaySvg />}
    </MainBtnStyled>
  );
};

export default ToggleClock;
