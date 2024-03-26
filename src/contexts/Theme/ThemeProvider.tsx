import { MantineProvider } from "@mantine/core";
import { colorSchemeManager } from "../../config/scheme";
import { theme } from "../../config/theme";
import { ThemeProviderProps } from "./ThemeProvider.types";

import "@mantine/core/styles.css";

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="auto"
      {...props}
    />
  );
}
