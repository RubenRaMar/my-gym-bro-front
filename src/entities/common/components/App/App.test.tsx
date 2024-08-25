import { screen, waitFor } from "@testing-library/react";
import App from "./App";
import routes from "../../routers/routes";
import { renderWithProviders } from "../../utils/tests/renderWithProviders";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show the text 'Grupos musculares", async () => {
      const expectedHeading = /grupos musculares/i;

      renderWithProviders({
        ui: <App />,
        preloadedRoutes: routes,
      });

      await waitFor(() => {
        const text = screen.getByRole("heading", {
          name: expectedHeading,
        });

        expect(text).toBeInTheDocument();
      });
    });
  });
});
