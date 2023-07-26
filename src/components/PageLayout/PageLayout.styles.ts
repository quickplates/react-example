import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  box: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.xl,
    justifyContent: "center",
    alignItems: "center",
  },
}));
