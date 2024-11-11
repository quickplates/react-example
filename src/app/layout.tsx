import { Outlet } from "react-router-dom";
import { PageLayout } from "../components/layouts/page-layout";
import { I18nProvider } from "../providers/i18n-provider";
import { ThemeProvider } from "../providers/theme-provider";
import { RootLayoutInput } from "./types";

export function RootLayout({}: RootLayoutInput) {
  return (
    <I18nProvider>
      <ThemeProvider>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </ThemeProvider>
    </I18nProvider>
  );
}
