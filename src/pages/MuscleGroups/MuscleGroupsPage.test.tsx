import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import MuscleGroupsPage from "./MuscleGroupsPage";

describe("Given a MuscleGroupPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Muscle Groups'", async () => {
      const expectedHeadingText = /muscle groups/i;

      renderWithProviders({ ui: <MuscleGroupsPage /> });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
