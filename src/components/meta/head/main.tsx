import { Helmet } from "react-helmet-async";
import { HeadInput } from "./types";

export function Head({ description, title }: HeadInput) {
  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {title && <title>{title}</title>}
    </Helmet>
  );
}
