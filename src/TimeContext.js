import React, { useContext, useState } from "react";

const TimeContext = React.createContext();
const TimeUpdateContext = React.createContext();
const TickingContext = React.createContext();
const TickingUpdateContext = React.createContext();
const BreakTimeContext = React.createContext();
const BreakTimeUpdateContext = React.createContext();

export function useTime() {
  return useContext(TimeContext);
}

export function useTimeUpdate() {
  return useContext(TimeUpdateContext);
}

export function useBreakTime() {
  return useContext(BreakTimeContext);
}

export function useBreakTimeUpdate() {
  return useContext(BreakTimeUpdateContext);
}

export function useTicking() {
  return useContext(TickingContext);
}

export function useTickingUpdate() {
  return useContext(TickingUpdateContext);
}

export function TimeProvider({ children }) {
  // 1500 segudos = 25 minutos.
  // 300 segundos = 5 minutos.
  const [time, setTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [ticking, setTicking] = useState(false);

  return (
    <TimeContext.Provider value={time}>
      <TimeUpdateContext.Provider value={setTime}>
        <TickingContext.Provider value={ticking}>
          <TickingUpdateContext.Provider value={setTicking}>
            <BreakTimeContext.Provider value={breakTime}>
              <BreakTimeUpdateContext.Provider value={setBreakTime}>
                {children}
              </BreakTimeUpdateContext.Provider>
            </BreakTimeContext.Provider>
          </TickingUpdateContext.Provider>
        </TickingContext.Provider>
      </TimeUpdateContext.Provider>
    </TimeContext.Provider>
  );
}
