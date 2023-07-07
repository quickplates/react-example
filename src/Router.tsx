import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, IndexPage, Root } from "./pages";

export function Router() {
  const router = createBrowserRouter([
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
  ]);

  return <RouterProvider router={router} />;
}
