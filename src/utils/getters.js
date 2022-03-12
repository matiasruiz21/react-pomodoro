export function getMinutos(time) {
  return Math.floor(time / 60);
}

export function getSegundos(time) {
  return time - Math.floor(time / 60) * 60;
}
