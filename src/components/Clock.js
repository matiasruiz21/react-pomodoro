import { useEffect } from "react";
import {
  useTicking,
  useTickingUpdate,
  useTime,
  useTimeUpdate,
} from "../TimeContext";
import ClockStyled from "./styled-components/ClockStyled";
import { getMinutos, getSegundos } from "./utils/getters";

var interval = null;

const Clock = () => {
  var time = useTime();
  const updateTime = useTimeUpdate();
  var ticking = useTicking();
  const tickingUpdate = useTickingUpdate();
  if (ticking) console.log("Ticking");

  function start() {
    interval = setInterval(() => {
      console.log(getMinutos(time), ":", getSegundos(time));
      updateTime((time -= 1));
      if (time <= 0) {
        tickingUpdate(false);
        clearInterval(interval);
        console.log("completed");
      }
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
  }

  useEffect(() => {
    if (!ticking) {
      stop();
    } else {
      start();
    }
    // eslint-disable-next-line
  }, [ticking]);

  let minutos = getMinutos(time);
  let segundos = getSegundos(time);

  return (
    <ClockStyled id="time-left">
      {minutos.toString().length <= 1 ? "0" + minutos : minutos}:
      {segundos.toString().length <= 1 ? "0" + segundos : segundos}
    </ClockStyled>
  );
};

export default Clock;
