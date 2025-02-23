import { RootPageMetadata } from "../components/metadata/root/root-page-metadata";
import { RootPageView } from "../components/views/root/root-page-view";
import { RootPageInput } from "./types";

export function RootPage({}: RootPageInput) {
  return (
    <>
      <RootPageMetadata />
      <RootPageView />
    </>
  );
}
