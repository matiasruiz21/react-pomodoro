import { ACTIONS } from "../App";
import { getMinutos } from "../utils/getters";

const BreakInput = ({ dispatch, isRunning, breakInput }) => {
  return (
    <div id="break-input">
      <p id="break-label">Break Length</p>
      <input
        value={getMinutos(breakInput)}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.HANDLE_INPUT,
            payload: { id: e.target.id, value: e.target.value },
          })
        }
        id="break-length"
      ></input>
      <button
        id="break-increment"
        onClick={(e) => {
          if (isRunning) return;
          dispatch({
            type: ACTIONS.HANDLE_INCREMENT,
            payload: { id: e.target.id },
          });
        }}
      >
        +
      </button>
      <button
        id="break-decrement"
        onClick={(e) => {
          if (breakInput <= 60 || isRunning) return;
          dispatch({
            type: ACTIONS.HANDLE_DECREMENT,
            payload: { id: e.target.id },
          });
        }}
      >
        -
      </button>
    </div>
  );
};

export default BreakInput;
