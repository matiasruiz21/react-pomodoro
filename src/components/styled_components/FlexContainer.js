import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => width};
  padding: 0.25rem 0 1rem 0;
`;

export { FlexContainer };
