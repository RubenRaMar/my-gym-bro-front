import { supportedLanguages } from "../../../../constants/intl/intl";
import { initialSessionData } from "../../../../constants/sessionData/sessionData";
import { SessionData } from "../../../../types";
import {
  sessionDataReducer,
  updateLanguageActionCreator,
} from "../../sessionDataSlice";

describe("Given the updateLanguage state handler function", () => {
  const newLanguageCodes = [supportedLanguages.es, supportedLanguages.en];

  newLanguageCodes.forEach((newLanguageCode) => {
    describe(`When it is called with a new language code '${newLanguageCode}'`, () => {
      test(`Then it should return a new state object with the updated language code '${newLanguageCode}'`, () => {
        const updateLanguageAction = updateLanguageActionCreator({
          languageCode: newLanguageCode,
        });
        const expectedState: SessionData = {
          ...initialSessionData,
          languageCode: newLanguageCode,
        };

        const newState = sessionDataReducer(
          initialSessionData,
          updateLanguageAction
        );

        expect(newState).toStrictEqual(expectedState);
      });
    });
  });
});
