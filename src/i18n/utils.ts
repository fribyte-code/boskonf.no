import { en, no } from "./translations";

export const langs = { no, en };
const defaultLang = "no";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in langs) return lang as keyof typeof langs;
  return defaultLang;
}

/**
 * Get the localized string from `key`.
 * @param key
 */
export function useTranslation(url: URL) {
  return function t(key: keyof typeof no): string {
    const currentLanguage = getLangFromUrl(url);
    return langs[currentLanguage][key];
  };
}
