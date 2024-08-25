import { PropsWithChildren, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "../../../../store";
import { intlMessages } from "../../constants/intl/intl";
import moment from "moment";

const IntlProvaiderContainer = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const { languageCode: currentLanguage } = useAppSelector(
    (state) => state.sessionData
  );

  useEffect(() => {
    moment.locale(currentLanguage);
  }, [currentLanguage]);

  return (
    <IntlProvider
      locale={currentLanguage}
      messages={intlMessages[currentLanguage]}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProvaiderContainer;
