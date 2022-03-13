import styled from "styled-components";

const DisplayStyled = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    ${({ theme }) => theme.background};
  p {
    font-size: 7rem;
  }
  border-radius: 4px;
  margin: 1rem;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export { DisplayStyled };
