import { useEffect } from "react";
import { getDisplayTime } from "../utils/getDisplayTime";
import { DisplayStyled } from "./styled_components/DisplayStyled";

const Display = ({ isSession, isRunning, sessionTime, breakTime }) => {
  let { minutos, segundos } = getDisplayTime(isSession, sessionTime, breakTime);

  useEffect(() => {
    document.title = isRunning
      ? minutos + ":" + segundos + " | Reloj Pomodoro"
      : "Reloj Pomodoro";
  }, [isRunning, minutos, segundos]);

  return (
    <DisplayStyled id="display">
      <h4 id="timer-label">{isSession ? "Sesión" : "Descanso"}</h4>

      <span id="time-left">
        {minutos}:{segundos}
      </span>
    </DisplayStyled>
  );
};

export default Display;
