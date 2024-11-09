import { i18n, Messages } from "@lingui/core";
import { defaultLocale, defaultMessages } from "./constants";

function getLocale(language: string) {
  try {
    return new Intl.Locale(language);
  } catch {
    return new Intl.Locale(defaultLocale);
  }
}

async function tryImport(locale: string) {
  try {
    const imported = await import(`../../locales/${locale}.po`);
    return imported as { messages: Messages };
  } catch {
    return null;
  }
}

function activate(locale: string, messages: Messages) {
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export async function loadLocale(language: string) {
  const locale = getLocale(language);

  const fullImported = await tryImport(locale.baseName);
  if (fullImported) {
    activate(locale.baseName, fullImported.messages);
    return;
  }

  const languageImported = await tryImport(locale.language);
  if (languageImported) {
    activate(locale.language, languageImported.messages);
    return;
  }

  activate(defaultLocale, defaultMessages);
}
