import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./components/Login/Login";

import Quotes from "./components/Quotes/Quotes";
import NewQuote from "./components/Quotes/NewQuote";
import SingleQuote from "./components/Quotes/SingleQuote";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    errorElement: <>Error Page</>,
    children: [
      {
        path: "quotes",
        element: <Quotes />,
      },
      {
        path: "newQuotes",

        element: <NewQuote />,
      },
      {
        path: "quotes/:quoteId",

        element: <SingleQuote />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
