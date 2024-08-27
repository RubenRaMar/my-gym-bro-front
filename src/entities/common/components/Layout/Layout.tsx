import { Outlet } from "react-router-dom";
import ContainerStyled from "../../styles/shared/ContainerStyled";
import MainHeader from "../MainHeader/MainHeader";

const Layout = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
