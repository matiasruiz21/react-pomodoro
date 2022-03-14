import styled from "styled-components";

const DisplayStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0.35rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    ${({ theme }) => theme.background};
  border-radius: 4px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);

  span {
    font-size: 7rem;
    color: ${({ theme }) => theme.bw};
  }
`;

export { DisplayStyled };
