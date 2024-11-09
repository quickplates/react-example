import { HelmetProvider as InternalHelmetProvider } from "react-helmet-async";
import { HelmetProviderInput } from "./types";

export function HelmetProvider({ children }: HelmetProviderInput) {
  return <InternalHelmetProvider>{children}</InternalHelmetProvider>;
}
