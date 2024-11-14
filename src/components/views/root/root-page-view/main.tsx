import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Button } from "@mantine/core";
import { useCallback } from "react";

import { useStore } from "../../../../hooks/use-store";
import { useToasts } from "../../../../hooks/use-toasts";
import { helloWorld } from "../../../../lib/hello-world";
import { RootPageViewInput } from "./types";

export function RootPageView({}: RootPageViewInput) {
  const { _ } = useLingui();
  const toasts = useToasts();

  const { hydrated, value: color } = useStore({
    selector: (state) => state.color,
  });
  const { value: flipColor } = useStore({
    selector: (state) => state.flipColor,
  });

  const onClick = useCallback(async () => {
    const { message } = await helloWorld();
    toasts.success(message);
    flipColor();
  }, [flipColor, toasts]);

  return (
    <Button
      color={hydrated ? color : undefined}
      loading={!hydrated}
      onClick={hydrated ? onClick : undefined}
      size="xl"
    >
      {_(msg({ message: "Click me!" }))}
    </Button>
  );
}
