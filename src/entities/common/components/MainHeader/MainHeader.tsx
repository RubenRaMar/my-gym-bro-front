import React from "react";
import MainHeaderStyled from "./MainHeaderStyled";
import { useAppDispatch } from "../../../../store/index";
import { LanguageCodes } from "../../i18n/types";
import { supportedLanguages } from "../../constants/intl/intl";
import { updateLanguageActionCreator } from "../../store/sessionData/sessionDataSlice";
import Button from "../Button/Button";
import { useIntl } from "react-intl";
import { formatMessage } from "../../i18n/i18n";

const MainHeader = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const handleSelectedLanguage = (newLanguageCode: LanguageCodes) =>
    dispatch(updateLanguageActionCreator({ languageCode: newLanguageCode }));

  return (
    <MainHeaderStyled className="main-header">
      <div className="main-header__logo-container">
        <img
          src="./images/logo/my-gym-bro-logo-letters.png"
          alt={formatMessage(intl, "image.alt.logo")}
          width="100px"
          height="100px"
        />
      </div>
      <ul className="main-header__languages">
        <li>
          <Button
            text={supportedLanguages.es.toLocaleUpperCase()}
            actionOnClick={() => handleSelectedLanguage(supportedLanguages.es)}
          />
        </li>
        <li>|</li>
        <li>
          <Button
            text={supportedLanguages.es.toLocaleUpperCase()}
            actionOnClick={() => handleSelectedLanguage(supportedLanguages.en)}
          />
        </li>
      </ul>
    </MainHeaderStyled>
  );
};

export default MainHeader;
