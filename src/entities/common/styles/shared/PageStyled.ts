import styled from "styled-components";
import { themeColors, themeFontsSize } from "../themes/mainTheme";

const PageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 70px;

  h1 {
    padding-block: 10px;
    text-align: center;
    color: ${themeColors.primary};
    font-size: ${themeFontsSize.large};
    border-radius: 15px;
  }
`;

export default PageStyled;
