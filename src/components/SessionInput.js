import { ACTIONS } from "../App";
import { getMinutos } from "../utils/getters";

const SessionInput = ({ dispatch, isRunning, sessionInput }) => {
  return (
    <div id="session-input">
      <p id="session-label">Session Length</p>
      <input
        value={getMinutos(sessionInput)}
        onChange={(e) => {
          dispatch({
            type: ACTIONS.HANDLE_INPUT,
            payload: { id: e.target.id, value: e.target.value },
          });
        }}
        id="session-length"
      ></input>
      <button
        id="session-increment"
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
        id="session-decrement"
        onClick={(e) => {
          if (sessionInput <= 60 || isRunning) return;
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

export default SessionInput;
