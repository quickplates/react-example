import { Helmet } from "react-helmet-async";
import { HeadProps } from "./Head.types";

export function Head({ title, description, favicon }: HeadProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {favicon && (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      )}
    </Helmet>
  );
}
