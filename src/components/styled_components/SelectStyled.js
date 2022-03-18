import styled from "styled-components";

const SelectStyled = styled.select`
  background-color: ${({ theme }) => theme.red.background};
  padding: 0.3rem;
  color: white;
  border: none;
  border-radius: 4px;
`;

export { SelectStyled };
