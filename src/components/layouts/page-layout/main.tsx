import { Box } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { PageLayoutInput } from "./types";

import classes from "./styles.module.css";

export function PageLayout({ children }: PageLayoutInput) {
  return (
    <>
      <Notifications position="top-right" />
      <Box className={classes.outter}>
        <Box className={classes.inner}>{children}</Box>
      </Box>
    </>
  );
}
