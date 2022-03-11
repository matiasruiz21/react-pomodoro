import { useTicking, useTickingUpdate } from "../TimeContext";

const StartStop = () => {
  const tickingUpdate = useTickingUpdate();
  var ticking = useTicking();

  return (
    <>
      <button id="start_stop" onClick={() => tickingUpdate(!ticking)}>
        START/STOP
      </button>
      {ticking ? <p>Ticking</p> : <p>Not Ticking</p>}
    </>
  );
};

export default StartStop;
