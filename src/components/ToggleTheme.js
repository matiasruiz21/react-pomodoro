import { MoonSvg } from "../svg/MoonSvg";
import { SunSvg } from "../svg/SunSvg";

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {theme === "ligth" ? <SunSvg /> : <MoonSvg />}
    </button>
  );
};

export default ToggleTheme;
