import { RootErrorMetadata } from "../components/metadata/root/root-error-metadata";
import { RootErrorView } from "../components/views/root/root-error-view";
import { RootErrorInput } from "./types";

export function RootError({}: RootErrorInput) {
  return (
    <>
      <RootErrorMetadata />
      <RootErrorView />
    </>
  );
}
