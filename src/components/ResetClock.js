import { ResetSvg } from "../svg/ResetSvg";
import { ACTIONS } from "../App";
import { BtnStyled } from "./styled_components/BtnStyled";

const ResetClock = ({ dispatch, audioRef }) => {
  return (
    <BtnStyled
      title="Reset"
      id="reset"
      onClick={() =>
        dispatch({
          type: ACTIONS.RESET,
          payload: { audio: audioRef.current },
        })
      }
      padding={"0.125rem 0.25rem"}
    >
      <ResetSvg />
    </BtnStyled>
  );
};

export default ResetClock;
