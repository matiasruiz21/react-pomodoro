import { SettingsSvg } from "../svg/SettingsSvg";
import { SettingsBtnStyled } from "./styled_components/SettingsBtnStyled";

const SettingsBtn = ({ setModalOpen }) => {
  return (
    <SettingsBtnStyled onClick={() => setModalOpen(true)}>
      <SettingsSvg />
    </SettingsBtnStyled>
  );
};

export default SettingsBtn;
