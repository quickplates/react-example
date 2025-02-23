import { RouteObject } from "react-router";

import { RootError } from "./error";
import { RootLayout } from "./layout";
import { RootNotFound } from "./not-found";
import { RootPage } from "./page";

export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <RootPage />,
        index: true,
      },
    ],
    element: <RootLayout />,
    errorElement: <RootError />,
    path: "/",
  },
  {
    element: <RootNotFound />,
    errorElement: <RootError />,
    path: "*",
  },
];
