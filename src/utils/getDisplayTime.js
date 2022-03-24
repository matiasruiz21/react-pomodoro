import { getMinutos, getSegundos } from "./getters";

export function getDisplayTime(isSession, sessionTime, breakTime) {
  let minutos = getMinutos(isSession ? sessionTime : breakTime);
  let segundos = getSegundos(isSession ? sessionTime : breakTime);
  minutos = minutos.toString().length <= 1 ? "0" + minutos : minutos;
  segundos = segundos.toString().length <= 1 ? "0" + segundos : segundos;
  return { minutos, segundos };
}
