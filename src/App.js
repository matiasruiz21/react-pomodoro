import Break from "./components/Break";
import FlexContainer from "./components/FlexContainer";
import Session from "./components/Session";
import Clock from "./components/Clock";
import GlobalStyles from "./Global";
import StartStop from "./components/StartStop";
import Reset from "./components/Reset";
import { TimeProvider } from "./TimeContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <TimeProvider>
        <h1 id="timer-label">Session</h1>
        <Clock />
        <FlexContainer>
          <Session />
          <Break />
        </FlexContainer>
        <StartStop />
        <Reset />
      </TimeProvider>
    </>
  );
}

export default App;
