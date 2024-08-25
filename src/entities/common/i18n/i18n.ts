import en from "./messages/en/en";
import es from "./messages/es/es";

import { IntlShape } from "react-intl";
import { PrimitiveType } from "intl-messageformat";

export type IntlKey = keyof typeof en | keyof typeof es;

export const formatMessage = (
  intl: IntlShape,
  key: IntlKey,
  values?: Record<string, PrimitiveType> | undefined
) => intl.formatMessage({ id: key }, values);

export default { en, es };
