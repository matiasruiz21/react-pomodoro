import styled from "styled-components";

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: ${({ theme }) => theme.text.primary};
    transition: 0.2s;
    border-radius: 24px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.red.background};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;

export { SwitchStyled };
