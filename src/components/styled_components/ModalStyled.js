import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    ${({ theme }) => theme.background};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4rem;
  z-index: 1000;
`;

export { ModalStyled };
