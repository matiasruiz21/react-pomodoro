import {
  useBreakTimeUpdate,
  useTickingUpdate,
  useTimeUpdate,
} from "../TimeContext";

const Reset = () => {
  const updateTime = useTimeUpdate();
  const tickingUpdate = useTickingUpdate();
  var breakTimeUpdate = useBreakTimeUpdate();

  function reset() {
    updateTime(1500);
    breakTimeUpdate(300);
    tickingUpdate(false);
  }

  return (
    <button id="reset" onClick={reset}>
      RESET
    </button>
  );
};

export default Reset;
