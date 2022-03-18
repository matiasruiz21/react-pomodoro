import { SwitchStyled } from "./styled_components/SwitchStyled";

const Switch = ({ theme, toggleTheme }) => {
  return (
    <SwitchStyled>
      <input
        type="checkbox"
        checked={theme !== "ligth"}
        onChange={toggleTheme}
      />
      <span />
    </SwitchStyled>
  );
};

export default Switch;
