import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  box: {
    width: "100%",
    height: "100%",
    padding: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
}));
