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
export function useTranslation(url?: URL, language?: keyof typeof langs) {
  if (!url && !language) {
    throw new Error("Either url or language must be defined");
  }

  return function t(key: keyof typeof no): string {
    const currentLanguage = url
      ? getLangFromUrl(url)
      : (language ?? defaultLang);
    console.debug(url, language, currentLanguage);
    return langs[currentLanguage][key];
  };
}
