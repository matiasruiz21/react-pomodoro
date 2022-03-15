import styled from "styled-components";
import { red } from "../../themes";

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.2rem;
  font-size: 1.125rem;

  input {
    font-size: 1.5rem;
    padding: 0.1rem 0 0;
    text-align: center;
    width: 5rem;
    border: hidden;
    border-radius: 4px 4px 0 0;
    border-bottom: 2px solid ${red[500]};
    background-color: inherit;
    color: ${({ theme }) => theme.text.primary};
    &:focus {
      outline: 2px solid ${red[500]};
      outline-offset: -2px;
    }
  }

  label {
    margin-bottom: 0.5rem;
  }
`;

export { InputStyled };
