// Libraries
import { Outlet } from "react-router-dom";
// Component
import { Header } from "../Header/Header";


export const Layout = function () {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
