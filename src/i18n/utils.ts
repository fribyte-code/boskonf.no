import { en, no } from "./translations";

export const langs = { no, en };
const defaultLang = "no";

/**
 * Get the language from the URL.
 * @param url The URL to get the language from
 * @returns The language from the URL
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in langs) return lang as keyof typeof langs;
  return defaultLang;
}

/**
 * Use this hook to get the correct translation of a key.
 */
export function useTranslation(url?: URL, language?: keyof typeof langs) {
  if (!url && !language) {
    throw new Error("Either url or language must be defined");
  }

  function getCurrentLang() {
    return url ? getLangFromUrl(url) : (language ?? defaultLang);
  }
  /**
   * Fetches the correct translation of key from the current language.
   * If the text is an array of strings you can use `t<string[]>("key")` to get correct TS.
   * @param key The key to fetch from the translations, e.g. "sponsors.goods"
   * @returns The translation of the key
   * @example t<string[]>("sponsors.goods") // ["string A", "string B"]
   * @example t("sponsors.become") // "gives sponsors the opportunity..."
   */
  return function t<T extends string | string[]>(key: keyof typeof no) {
    return langs[getCurrentLang()][key] as T;
  };
}
