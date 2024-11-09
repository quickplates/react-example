import { useMemo, useSyncExternalStore } from "react";
import { UseLanguageInput, UseLanguageOutput } from "./types";
import {
  getCurrentLanguage,
  getDefaultLanguage,
  subscribeLanguageChange,
} from "./utils";

export function UseLanguage({}: UseLanguageInput = {}): UseLanguageOutput {
  const language = useSyncExternalStore(
    subscribeLanguageChange,
    getCurrentLanguage,
    getDefaultLanguage,
  );

  return useMemo(() => ({ language: language }), [language]);
}
