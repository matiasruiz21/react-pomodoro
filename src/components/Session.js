import TimeSelector from "./TimeSelector";
import { useTicking, useTime, useTimeUpdate } from "../TimeContext";
import { getMinutos } from "./utils/getters";
import { useRef } from "react";
import { useEffect } from "react";

const Session = () => {
  var time = useTime();
  const updateTime = useTimeUpdate();
  var ticking = useTicking();
  const inputVal = useRef();

  function onInputChange(e) {
    // Si el input tiene cualquier caracter que no sea un dígito o el reloj esta corriendo returns.
    if (e.toString().match(/[^\d]/) || ticking) return;

    // Convierte a segundos y actualiza el state.
    updateTime(e * 60);
  }

  // Persistencia de inputVal entre renders
  useEffect(() => {
    inputVal.current = getMinutos(time);
  });

  return (
    <div id="session-label">
      Session
      <input
        value={ticking ? inputVal.current : getMinutos(time)}
        id="session-length"
        onChange={(e) => onInputChange(e.target.value)}
      />
      <TimeSelector incId={"session-increment"} decId={"session-decrement"} />
    </div>
  );
};

export default Session;
