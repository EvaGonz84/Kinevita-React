import { createBrowserRouter } from "react-router-dom";
import {LayoutPublic} from '../layout/LayoutPublic'
import { Home, Services, Contact, Prices, NotFound } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/servicios", element: <Services /> },
      { path: "/tarifas", element: <Prices /> },
      { path: "/contacto", element: <Contact /> },
    ],
  },
]);
