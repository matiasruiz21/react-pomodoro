import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  width: min(90%, 30rem);
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
  z-index: 1000;

  text-align: left;
  padding: 1rem;

  font-weight: 500;

  p {
    color: ${({ theme }) => theme.text.secondary};
    padding-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.divider};
  }
`;

export { ModalStyled };
