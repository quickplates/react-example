import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, IndexPage, NotFoundPage, Root } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <IndexPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export function Router() {
  return <RouterProvider router={router} />;
}
