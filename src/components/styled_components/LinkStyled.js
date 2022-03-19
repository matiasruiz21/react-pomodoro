import styled from "styled-components";

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 10px;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { LinkStyled };
