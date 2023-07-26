import { Box } from "@mantine/core";
import { Background } from "../Background";
import { useStyles } from "./PageLayout.styles";
import { PageLayoutProps } from "./PageLayout.types";

export function PageLayout(props: PageLayoutProps) {
  const { classes } = useStyles();

  return (
    <Background>
      <Box className={classes.box} {...props} />
    </Background>
  );
}
