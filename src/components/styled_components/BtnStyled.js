import styled from "styled-components";
import { red } from "../../themes";

const BtnStyled = styled.button`
  /* Shape */
  border-radius: 4px;
  padding: ${({ padding }) => padding};
  outline: none;
  border: none;

  cursor: pointer;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));

  /* On Primary / High Emphasis */
  color: #fff;

  /* Primary/200 */
  background: ${({ theme }) => theme.red.background};

  &:hover {
    box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));
    background: ${({ theme }) => theme.red.hover};
  }
  &:active {
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
    background: ${({ theme }) => theme.red.active};
  }

  &:focus {
    outline: 2.5px solid ${red[900]};
  }
`;

export { BtnStyled };
