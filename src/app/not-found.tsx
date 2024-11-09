import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Head } from "../components/meta/head";
import { RootNotFoundView } from "../components/views/root/root-not-found-view";
import { RootNotFoundInput } from "./types";

export function RootNotFound({}: RootNotFoundInput) {
  const { _ } = useLingui();

  return (
    <>
      <Head
        description={_(msg({ message: "react-example" }))}
        title={_(msg({ message: "Not Found • react-example" }))}
      />
      <RootNotFoundView />
    </>
  );
}
