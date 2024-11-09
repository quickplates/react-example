import { i18n } from "@lingui/core";
import { I18nProvider as InternalI18nProvider } from "@lingui/react";
import { useEffect } from "react";
import { UseLanguage } from "../../hooks/use-language";
import { I18nProviderInput } from "./types";
import { loadLocale } from "./utils";

export function I18nProvider({ children }: I18nProviderInput) {
  const { language } = UseLanguage();

  useEffect(() => {
    loadLocale(language);
  }, [language]);

  return <InternalI18nProvider i18n={i18n}>{children}</InternalI18nProvider>;
}
