import { ACTIONS } from "../App";
import { MinusSvg } from "../svg/MinusSvg";
import { PlusSvg } from "../svg/PlusSvg";
import { getMinutos } from "../utils/getters";
import { BtnStyled } from "./styled_components/BtnStyled";
import { FlexContainer } from "./styled_components/FlexContainer";
import { InputStyled } from "./styled_components/InputStyled";

const SessionInput = ({ dispatch, isRunning, sessionInput }) => {
  return (
    <FlexContainer
      id="session-input"
      justify={"center"}
      alignItems={"center"}
      gap={"0.5rem"}
      flexDirection={"column"}
    >
      <InputStyled>
        <label id="session-label" htmlFor="session-length">
          Sesión
        </label>
        <input
          value={getMinutos(sessionInput)}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.HANDLE_INPUT,
              payload: { id: e.target.id, value: e.target.value },
            });
          }}
          id="session-length"
        ></input>
      </InputStyled>

      <FlexContainer gap={"0.75rem"} padding={"0.35rem 1rem 1rem 1rem "}>
        <BtnStyled
          id="session-increment"
          onClick={() => {
            if (isRunning) return;
            dispatch({
              type: ACTIONS.HANDLE_INCREMENT,
              payload: { id: "session-increment" },
            });
          }}
          padding={"0.1rem 0.25rem"}
        >
          <PlusSvg />
        </BtnStyled>
        <BtnStyled
          id="session-decrement"
          onClick={() => {
            if (sessionInput <= 60 || isRunning) return;
            dispatch({
              type: ACTIONS.HANDLE_DECREMENT,
              payload: { id: "session-decrement" },
            });
          }}
          padding={"0.1rem 0.25rem"}
        >
          <MinusSvg />
        </BtnStyled>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SessionInput;
