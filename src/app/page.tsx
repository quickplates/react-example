import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Head } from "../components/meta/head";
import { RootPageView } from "../components/views/root/root-page-view";
import { RootPageInput } from "./types";

export function RootPage({}: RootPageInput) {
  const { _ } = useLingui();

  return (
    <>
      <Head
        description={_(msg({ message: "react-example" }))}
        title={_(msg({ message: "react-example" }))}
      />
      <RootPageView />
    </>
  );
}
