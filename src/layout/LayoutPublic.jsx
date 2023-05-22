import { Outlet } from "react-router-dom";
import {Navbar}from '../components/Navbar'

const LayoutPublic = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export { LayoutPublic };