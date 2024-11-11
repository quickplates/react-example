import { useElementAttribute } from "../use-element-attribute";
import { useElementText } from "../use-element-text";
import { UseDocumentMetadataInput } from "./types";

export function useDocumentMetadata({
  description,
  language,
  title,
}: UseDocumentMetadataInput): void {
  useElementAttribute({
    selector: "meta[name='description']",
    attribute: "content",
    value: description,
  });

  useElementAttribute({
    selector: "html",
    attribute: "lang",
    value: language,
  });

  useElementText({
    selector: "title",
    text: title,
  });
}
