import { ACTIONS } from "../App";
import { MinusSvg } from "../svg/MinusSvg";
import { PlusSvg } from "../svg/PlusSvg";
import { getMinutos } from "../utils/getters";
import { BtnStyled } from "./styled_components/BtnStyled";
import { FlexContainer } from "./styled_components/FlexContainer";
import { InputStyled } from "./styled_components/InputStyled";

const BreakInput = ({ dispatch, isRunning, breakInput }) => {
  return (
    <FlexContainer
      id="break-input"
      justify={"center"}
      alignItems={"center"}
      gap={"0.5rem"}
      flexDirection={"column"}
    >
      <InputStyled>
        <label id="break-label" htmlFor="break-length">
          Descanso
        </label>
        <input
          value={getMinutos(breakInput)}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.HANDLE_INPUT,
              payload: { id: e.target.id, value: e.target.value },
            })
          }
          id="break-length"
        ></input>
      </InputStyled>
      <FlexContainer gap={"0.75rem"} padding={"0.35rem 1rem 1rem 1rem "}>
        <BtnStyled
          id="break-increment"
          onClick={() => {
            if (isRunning) return;
            dispatch({
              type: ACTIONS.HANDLE_INCREMENT,
              payload: { id: "break-increment" },
            });
          }}
          padding={"0.1rem 0.25rem"}
        >
          <PlusSvg />
        </BtnStyled>
        <BtnStyled
          id="break-decrement"
          onClick={() => {
            if (breakInput <= 60 || isRunning) return;
            dispatch({
              type: ACTIONS.HANDLE_DECREMENT,
              payload: { id: "break-decrement" },
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

export default BreakInput;
