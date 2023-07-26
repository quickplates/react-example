import { Box } from "@mantine/core";
import { useStyles } from "./Background.styles";
import { BackgroundProps } from "./Background.types";

export function Background(props: BackgroundProps) {
  const { classes } = useStyles();

  return <Box className={classes.box} {...props} />;
}
