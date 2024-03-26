import { Notifications } from "@mantine/notifications";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "./Router";
import { ThemeProvider } from "./contexts";

export function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Notifications position="top-right" />
        <Router />
      </HelmetProvider>
    </ThemeProvider>
  );
}
