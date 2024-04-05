import { Helmet } from "react-helmet-async";
import { HeadProps } from "./Head.types";

export function Head({ title, description }: HeadProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
