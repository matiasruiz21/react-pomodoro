import { useRef } from "react";
import { useEffect } from "react";
import { useBreakTime, useBreakTimeUpdate, useTicking } from "../TimeContext";
import TimeSelector from "./TimeSelector";
import { getMinutos } from "./utils/getters";

const Break = () => {
  var breakTime = useBreakTime();
  const updateBreakTime = useBreakTimeUpdate();
  var ticking = useTicking();
  const inputVal = useRef();

  function onInputChange(e) {
    // Si el input tiene cualquier caracter que no sea un dígito o el reloj esta corriendo returns.
    if (e.toString().match(/[^\d]/) || ticking) return;

    // Convierte a segundos y actualiza el state.
    updateBreakTime(e * 60);
  }

  // Persistencia de inputVal entre renders
  useEffect(() => {
    inputVal.current = getMinutos(breakTime);
  });

  return (
    <div id="break-label">
      Break Length
      <input
        value={ticking ? inputVal.current : getMinutos(breakTime)}
        id="break-length"
        onChange={(e) => onInputChange(e.target.value)}
        min="1"
      />
      <TimeSelector incId={"break-increment"} decId={"break-decrement"} />
    </div>
  );
};

export default Break;
