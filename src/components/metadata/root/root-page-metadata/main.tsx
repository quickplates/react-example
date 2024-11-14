import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RootPageMetadataInput } from "./types";

export function RootPageMetadata({}: RootPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "react-example" })),
    title: _(msg({ message: "react-example" })),
  });

  return null;
}
