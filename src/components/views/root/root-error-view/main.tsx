import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Title } from "@mantine/core";
import { RootErrorViewInput } from "./types";

export function RootErrorView({}: RootErrorViewInput) {
  const { _ } = useLingui();

  return <Title>{_(msg({ message: "Something went wrong" }))}</Title>;
}
