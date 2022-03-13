import { PauseSvg } from "../svg/PauseSvg";
import { PlaySvg } from "../svg/PlaySvg";
import { MainBtnStyled } from "./styled_components/MainBtnStyled";

const ToggleClock = ({ isRunning, toggleClock }) => {
  return (
    <MainBtnStyled
      title={isRunning ? "Pause" : "Play"}
      id="start_stop"
      onClick={() => toggleClock()}
    >
      {isRunning ? <PauseSvg /> : <PlaySvg />}
    </MainBtnStyled>
  );
};

export default ToggleClock;
