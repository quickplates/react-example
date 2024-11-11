import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../app/routes";
import { options } from "./options";
import { RouterInput } from "./types";

const router = createBrowserRouter(routes, options);

export function Router({}: RouterInput) {
  return <RouterProvider router={router} />;
}
