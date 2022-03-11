export function getMinutos(time) {
  return Math.floor(time / 60);
}

export function getSegundos(time) {
  return time - getMinutos(time) * 60;
}
