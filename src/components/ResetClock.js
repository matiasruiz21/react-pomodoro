import { ResetSvg } from "../svg/ResetSvg";
import { ACTIONS } from "../App";

const ResetClock = ({dispatch, audioRef}) => {
    return ( 
        <button
        title="Reset"
        id="reset"
        onClick={() =>
          dispatch({
            type: ACTIONS.RESET,
            payload: {audio: audioRef.current},
          })
        }
      >
        <ResetSvg />
      </button>
     );
}
 
export default ResetClock;