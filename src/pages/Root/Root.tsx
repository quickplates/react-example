import { Outlet } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";
import { RootProps } from "./Root.types";

export function Root({}: RootProps) {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
