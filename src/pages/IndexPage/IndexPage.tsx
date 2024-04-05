import { Button } from "@mantine/core";
import { Head } from "../../components";
import { labels } from "../../config/labels";
import { useStore } from "../../store";
import { IndexPageProps } from "./IndexPage.types";

export function IndexPage({}: IndexPageProps) {
  const [color, hydrated] = useStore((state) => state.color);
  const [flipColor] = useStore((state) => state.flipColor);

  return (
    <>
      <Head
        title={labels.pages.index.title}
        description={labels.pages.index.description}
      />
      <Button
        loading={!hydrated}
        size="xl"
        color={hydrated ? color : undefined}
        onClick={hydrated ? flipColor : undefined}
      >
        {labels.pages.index.buttons.main.label}
      </Button>
    </>
  );
}
