import styled from "styled-components";

const SettingsBtnStyled = styled.div`
  position: fixed;
  bottom: 5%;
  right: 4%;
  padding: 0.25rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    ${({ theme }) => theme.background};
  border-radius: 50%;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
`;

export { SettingsBtnStyled };
