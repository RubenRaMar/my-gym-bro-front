import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/renderWithProviders";
import App from "./App";
import routes from "../../routers/routes";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show the text 'Muscle Groups", async () => {
      const expectedHeading = /muscle groups/i;

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
