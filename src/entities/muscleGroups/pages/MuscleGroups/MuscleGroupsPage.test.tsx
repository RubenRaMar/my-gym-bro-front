import { screen } from "@testing-library/react";
import MuscleGroupsPage from "./MuscleGroupsPage";
import { supportedLanguages } from "../../../common/constants/intl/intl";
import { renderWithProviders } from "../../../common/utils/tests/renderWithProviders";

describe("Given a MuscleGroupPage page", () => {
  describe("When its rendered and the language is spanish", () => {
    test("Then it should show a heading with the text 'Grupos musculares'", async () => {
      const expectedHeadingText = /grupos musculares/i;

      renderWithProviders({
        ui: <MuscleGroupsPage />,
        preloadedState: { sessionData: { language: supportedLanguages.es } },
      });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("And the language is English", () => {
    test("Then it should show a heading with the text 'Muscle Groups'", async () => {
      const expectedHeadingText = /muscle groups/i;

      renderWithProviders({
        ui: <MuscleGroupsPage />,
        preloadedState: { sessionData: { language: supportedLanguages.en } },
      });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
