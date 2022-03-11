import TimeSelectorStyled from "./styled-components/TimeSelectorStyled";
import {
  useBreakTime,
  useBreakTimeUpdate,
  useTicking,
  useTime,
  useTimeUpdate,
} from "../TimeContext";

const TimeSelector = ({ incId, decId }) => {
  /**
   * TODO:
   * -  Refactor to useReducer
   * -  User Story #17: Limit session or break length up to > 60 (FreeCodeCamp).
   */
  var time = useTime();
  const updateTime = useTimeUpdate();
  var breakTime = useBreakTime();
  const updateBreakTime = useBreakTimeUpdate();
  var ticking = useTicking();

  function inc(id) {
    if (ticking) return;
    if (id === "session-increment") {
      updateTime((time += 60));
      return;
    }
    updateBreakTime((breakTime += 60));
  }

  function dec(id) {
    if (ticking) return;
    if (id === "session-decrement") {
      if (time <= 60) return;
      updateTime((time -= 60));
      return;
    }
    if (breakTime <= 60) return;
    updateBreakTime((breakTime -= 60));
  }

  return (
    <>
      <TimeSelectorStyled>
        <button id={incId} onClick={() => inc(incId)}>
          MAS
        </button>
        <button id={decId} onClick={() => dec(decId)}>
          MENOS
        </button>
      </TimeSelectorStyled>
    </>
  );
};

export default TimeSelector;
