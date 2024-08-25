import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "@fontsource/lexend";
import "@fontsource/playpen-sans";
import "@fontsource/playpen-sans/500.css";
import { store } from "./store";
import mainTheme from "./entities/common/styles/themes/mainTheme";
import appRouter from "./entities/common/routers/routers";
import GlobalStyle from "./entities/common/styles/GlobalStyle";
import IntlProvaiderContainer from "./entities/common/i18n/IntlProvaiderContainer/IntlProvaiderContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <IntlProvaiderContainer>
          <GlobalStyle />
          <RouterProvider router={appRouter} />
        </IntlProvaiderContainer>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
