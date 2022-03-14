import { ResetSvg } from "../svg/ResetSvg";
import { ACTIONS } from "../App";
import { ResetBtnStyled } from "./styled_components/ResetBtnStyled";

const ResetClock = ({ dispatch, audioRef }) => {
  return (
    <ResetBtnStyled
      title="Reset"
      id="reset"
      onClick={() =>
        dispatch({
          type: ACTIONS.RESET,
          payload: { audio: audioRef.current },
        })
      }
    >
      <ResetSvg />
    </ResetBtnStyled>
  );
};

export default ResetClock;
