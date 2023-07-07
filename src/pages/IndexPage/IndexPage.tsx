import { Button } from "@mantine/core";
import { Head } from "../../components/Head";
import { labels } from "../../labels";
import { useStore } from "../../store";
import { IndexPageProps } from "./IndexPage.types";

export function IndexPage({}: IndexPageProps) {
  const color = useStore((state) => state.color);
  const flipColor = useStore((state) => state.flipColor);

  return (
    <>
      <Head
        title={labels.pages.index.title}
        description={labels.pages.index.description}
        favicon={labels.pages.index.favicon}
      />
      <Button size="xl" color={color} onClick={flipColor}>
        {labels.pages.index.buttons.main.label}
      </Button>
    </>
  );
}
