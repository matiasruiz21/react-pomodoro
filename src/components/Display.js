import { getMinutos, getSegundos } from "../utils/getters";
import { DisplayStyled } from "./styled_components/DisplayStyled";

const Display = ({ isSession, sessionTime, breakTime }) => {
  let minutos = getMinutos(isSession ? sessionTime : breakTime);
  let segundos = getSegundos(isSession ? sessionTime : breakTime);
  return (
    <DisplayStyled id="display">
      <h4 id="timer-label">{isSession ? "Sesión" : "Descanso"}</h4>

      <span id="time-left">
        {minutos.toString().length <= 1 ? "0" + minutos : minutos}:
        {segundos.toString().length <= 1 ? "0" + segundos : segundos}
      </span>
    </DisplayStyled>
  );
};

export default Display;
