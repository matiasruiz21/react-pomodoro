import styled from "styled-components";
import { red } from "../../themes";

const ResetBtnStyled = styled.button`
  /* Shape */
  border-radius: 4px;

  padding: 0.25rem 0.25rem;
  outline: none;
  border: none;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));

  /* identical to box height, or 114% */
  letter-spacing: 1.25px;
  text-transform: uppercase;

  /* On Primary / High Emphasis */
  color: #fff;

  /* Primary/200 */
  background: ${red[500]};

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));
    background: ${red[600]};
  }
  &:active {
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
    background: ${red[700]};
  }

  &:focus {
    outline: 2.5px solid ${red[900]};
  }
`;

export { ResetBtnStyled };
