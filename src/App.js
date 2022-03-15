import { useReducer, useRef } from "react";
import { ThemeProvider } from "styled-components";
import BreakInput from "./components/BreakInput";
import Display from "./components/Display";
import useDarkMode from "./components/hooks/useDarkMode";
import ResetClock from "./components/ResetClock";
import SessionInput from "./components/SessionInput";
import { FlexContainer } from "./components/styled_components/FlexContainer";
import ToggleClock from "./components/ToggleClock";
import ToggleTheme from "./components/ToggleTheme";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, ligthTheme } from "./themes";
import "./normalize.css";

export const ACTIONS = {
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
        action.payload.audio.play();
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
      action.payload.audio.pause();
      action.payload.audio.currentTime = 0;
      clearInterval(intervalId);
      return init(initialState);

    case ACTIONS.HANDLE_INPUT:
      if (action.payload.value.toString().match(/[^\d]/) || state.isRunning)
        return state;
      return action.payload.id === "session-length"
        ? {
            ...state,
            sessionTime: Math.min(3600, Math.max(action.payload.value * 60, 0)),
            sessionInput: Math.min(
              3600,
              Math.max(action.payload.value * 60, 0)
            ),
          }
        : {
            ...state,
            breakTime: Math.min(3600, Math.max(action.payload.value * 60, 0)),
            breakInput: Math.min(3600, Math.max(action.payload.value * 60, 0)),
          };

    case ACTIONS.HANDLE_INCREMENT:
      console.log(action.payload.id);

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
      console.log(action.payload.id);
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

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [theme, toggleTheme] = useDarkMode();
  const audioRef = useRef();

  const toggleClock = () => {
    dispatch({
      type: ACTIONS.TOGGLE_CLOCK,
    });
    // TODO: Entender por que funciona esto ajjajaj
    if (state.isRunning) return clearInterval(intervalId);
    intervalId = setInterval(() => {
      dispatch({
        type: ACTIONS.TICK,
        payload: { audio: audioRef.current },
      });
    }, 1000);
  };

  //  TODO: Validar el almacenamiento local de varialbes
  //  como theme, sessionTime y breakTime

  return (
    <ThemeProvider theme={theme === "ligth" ? ligthTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <h1>Reloj Pomodoro</h1>
        <Display
          isSession={state.isSession}
          sessionTime={state.sessionTime}
          breakTime={state.breakTime}
        />
        <FlexContainer
          justify={"center"}
          alignItems={"center"}
          gap={"0.75rem"}
          flexDirection={"column"}
          padding={"0.25rem 0 1rem 0 "}
        >
          <ToggleClock isRunning={state.isRunning} toggleClock={toggleClock} />
          <ResetClock dispatch={dispatch} audioRef={audioRef} />
        </FlexContainer>
        <FlexContainer justify={"space-evenly"}>
          <SessionInput
            dispatch={dispatch}
            isRunning={state.isRunning}
            sessionInput={state.sessionInput}
          />
          <BreakInput
            dispatch={dispatch}
            isRunning={state.isRunning}
            breakInput={state.breakInput}
          />
        </FlexContainer>

        <br></br>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <br></br>

        <audio id="beep" src={state.audioSrc} ref={audioRef}></audio>
        {/* Display State (Dev) */}
        {/* <div style={{ textAlign: "left" }}>
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
        </div> */}
      </div>
    </ThemeProvider>
  );
}
