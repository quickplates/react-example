import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Head } from "../components/meta/head";
import { RootErrorView } from "../components/views/root/root-error-view";
import { RootErrorInput } from "./types";

export function RootError({}: RootErrorInput) {
  const { _ } = useLingui();

  return (
    <>
      <Head
        description={_(msg({ message: "react-example" }))}
        title={_(msg({ message: "Error • react-example" }))}
      />
      <RootErrorView />
    </>
  );
}
