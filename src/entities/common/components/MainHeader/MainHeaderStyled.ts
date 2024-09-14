import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const MainHeaderStyled = styled.header`
  padding: 10px;
  border-bottom: 2px solid ${themeColors.primary};

  .main-header {
    &__logo-container {
      display: flex;
      justify-content: center;
    }

    &__languages {
      position: absolute;
      right: 0;
      top: 10px;
      display: flex;
      align-items: center;
    }

    &__languages-button {
      padding: 0;
      width: 44px;
    }
  }
`;

export default MainHeaderStyled;
