import { useReducer, useRef } from "react";
import GlobalStyles from "./Global";

const ACTIONS = {
  TICK: "tick",
  RESET: "reset",
  TOGGLE_CLOCK: "toggle-clock",
  HANDLE_INPUT: "handle-input",
  HANDLE_INCREMENT: "handle-increment",
  HANDLE_DECREMENT: "handle-decrement",
};

const initialState = {
  sessionTime: 1500,
  breakTime: 300,
  sessionInput: 1500,
  breakInput: 300,
  isRunning: false,
  isSession: true,
  audioSrc:
    "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/desk-bell-service-1_GknppZVd_NWM.mp3",
};

function init(initialState) {
  return {
    sessionTime: initialState.sessionTime,
    breakTime: initialState.breakTime,
    sessionInput: initialState.sessionInput,
    breakInput: initialState.breakInput,
    isRunning: initialState.isRunning,
    isSession: initialState.isSession,
    audioSrc: initialState.audioSrc,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_CLOCK:
      return { ...state, isRunning: !state.isRunning };

    case ACTIONS.TICK:
      if (state.sessionTime <= 0) {
        console.log(action.payload);
        action.payload.play();
        return {
          ...state,
          isSession: !state.isSession,
          sessionTime: state.sessionInput,
        };
      }
      if (state.breakTime <= 0) {
        action.payload.play();
        return {
          ...state,
          isSession: !state.isSession,
          breakTime: state.breakInput,
        };
      }
      return state.isSession
        ? { ...state, sessionTime: state.sessionTime - 1 }
        : { ...state, breakTime: state.breakTime - 1 };
    case ACTIONS.RESET:
      action.payload.pause();
      action.payload.currentTime = 0;
      clearInterval(intervalId);
      return init(initialState);
    case ACTIONS.HANDLE_INPUT:
      return action.payload.id === "session-length"
        ? {
            ...state,
            sessionTime: Math.min(3600, Math.max(action.payload.value, 0)),
            sessionInput: Math.min(3600, Math.max(action.payload.value, 0)),
          }
        : {
            ...state,
            breakTime: Math.min(3600, Math.max(action.payload.value, 0)),
            breakInput: Math.min(3600, Math.max(action.payload.value, 0)),
          };
    case ACTIONS.HANDLE_INCREMENT:
      return action.payload.id === "session-increment"
        ? {
            ...state,
            sessionTime:
              state.sessionTime >= 3600 ? 3600 : state.sessionTime + 60,
            sessionInput:
              state.sessionInput >= 3600 ? 3600 : state.sessionInput + 60,
          }
        : {
            ...state,
            breakTime: state.breakTime >= 3600 ? 3600 : state.breakTime + 60,
            breakInput: state.breakInput >= 3600 ? 3600 : state.breakInput + 60,
          };
    case ACTIONS.HANDLE_DECREMENT:
      return action.payload.id === "session-decrement"
        ? {
            ...state,
            sessionTime: state.sessionTime - 60,
            sessionInput: state.sessionInput - 60,
          }
        : {
            ...state,
            breakTime: state.breakTime - 60,
            breakInput: state.breakInput - 60,
          };
    default:
      return state;
  }
}

let intervalId = null;

function getMinutos(time) {
  return Math.floor(time / 60);
}

function getSegundos(time) {
  return time - Math.floor(time / 60) * 60;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const audioRef = useRef();

  function toggleClock() {
    dispatch({
      type: ACTIONS.TOGGLE_CLOCK,
    });
    // TODO: Entender por que funciona esto ajjajaj
    if (state.isRunning) return clearInterval(intervalId);
    intervalId = setInterval(() => {
      dispatch({
        type: ACTIONS.TICK,
        payload: audioRef.current,
      });
    }, 1000);
  }

  function handleInput(e) {
    // Si el input tiene cualquier caracter que no sea un dígito o el reloj esta corriendo returns.
    if (e.value.toString().match(/[^\d]/) || state.isRunning) return;
    // Convierte a segundos y actualiza el state.
    dispatch({
      type: ACTIONS.HANDLE_INPUT,
      payload: { id: e.id, value: e.value * 60 },
    });
  }

  let minutos = getMinutos(
    state.isSession ? state.sessionTime : state.breakTime
  );
  let segundos = getSegundos(
    state.isSession ? state.sessionTime : state.breakTime
  );

  return (
    <div className="App">
      <GlobalStyles />
      <h1>Reloj Pomodoro</h1>
      <h4 id="timer-label">{state.isSession ? "Session" : "Break"}</h4>
      <p id="time-left">
        {minutos.toString().length <= 1 ? "0" + minutos : minutos}:
        {segundos.toString().length <= 1 ? "0" + segundos : segundos}
      </p>
      <button id="start_stop" onClick={() => toggleClock()}>
        Start/Stop
      </button>
      <button
        id="reset"
        onClick={() =>
          dispatch({
            type: ACTIONS.RESET,
            payload: audioRef.current,
          })
        }
      >
        Reset
      </button>
      <br></br>
      <p id="session-label">Session</p>
      <input
        value={getMinutos(state.sessionInput)}
        onChange={(e) => handleInput(e.target)}
        id="session-length"
      ></input>
      <button
        id="session-increment"
        onClick={(e) =>
          dispatch({
            type: ACTIONS.HANDLE_INCREMENT,
            payload: { id: e.target.id },
          })
        }
      >
        +
      </button>
      <button
        id="session-decrement"
        onClick={(e) => {
          if (state.sessionInput <= 60) return;
          dispatch({
            type: ACTIONS.HANDLE_DECREMENT,
            payload: { id: e.target.id },
          });
        }}
      >
        -
      </button>
      <br></br>
      <p id="break-label">Break Length</p>
      <input
        value={getMinutos(state.breakInput)}
        onChange={(e) => handleInput(e.target)}
        id="break-length"
      ></input>
      <button
        id="break-increment"
        onClick={(e) =>
          dispatch({
            type: ACTIONS.HANDLE_INCREMENT,
            payload: { id: e.target.id },
          })
        }
      >
        +
      </button>
      <button
        id="break-decrement"
        onClick={(e) => {
          if (state.breakInput <= 60) return state;
          dispatch({
            type: ACTIONS.HANDLE_DECREMENT,
            payload: { id: e.target.id },
          });
        }}
      >
        -
      </button>
      <br></br>
      <audio id="beep" src={state.audioSrc} ref={audioRef}></audio>
      <div style={{ textAlign: "left" }}>
        <ul>
          State:
          {Object.keys(state).map((e) => (
            <li key={e}>
              {e}:{" "}
              {typeof state[e] === "boolean"
                ? state[e]
                  ? "True"
                  : "False"
                : state[e]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
