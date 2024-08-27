import { screen } from "@testing-library/react";
import { supportedLanguages } from "../../constants/intl/intl";
import { initialSessionData } from "../../constants/sessionData/sessionData";
import { renderWithProviders } from "../../utils/tests/renderWithProviders";
import MainHeader from "./MainHeader";
import userEvent from "@testing-library/user-event";

describe("Given the MainHeader component", () => {
  const languageTestCases = [
    {
      language: "Spanish",
      languageCode: supportedLanguages.es,
      expectedAltText: "Logotipo de la aplicación My Gym Bro",
    },
    {
      language: "English",
      languageCode: supportedLanguages.en,
      expectedAltText: "My Gym Bro application logo",
    },
  ];

  languageTestCases.forEach(({ language, languageCode, expectedAltText }) => {
    describe(`When its rendered and the language is ${language}`, () => {
      test(`Then is should show an image of the '${expectedAltText}'`, () => {
        renderWithProviders({
          ui: <MainHeader />,
          preloadedState: {
            sessionData: {
              ...initialSessionData,
              languageCode,
            },
          },
        });

        const logoImg = screen.getByAltText(expectedAltText);

        expect(logoImg).toBeInTheDocument();
      });
    });

    describe(`When it is rendered and the ${languageCode.toUpperCase()} button is pressed`, () => {
      test(`Then it should change the language of the image altText a ${expectedAltText}`, async () => {
        const textButton = languageCode.toUpperCase();

        renderWithProviders({
          ui: <MainHeader />,
        });

        const languageButton = screen.getByRole("button", { name: textButton });

        await userEvent.click(languageButton);

        const logoImg = screen.getByAltText(expectedAltText);

        expect(logoImg).toBeInTheDocument();
      });
    });
  });
});
