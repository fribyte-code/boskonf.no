import type { BosKonfYear, Program } from "./program";
import program2023 from "./2023";
import program2024 from "./2024";

export async function getProgram(year: BosKonfYear, language: "en" | "no") {
  let json: Program;
  switch (year) {
    case "2024":
      json = program2024;
      break;
    case "2023":
      json = program2023;
      break;
    default:
      throw new Error(
        "Unsupported year, please: 1: Add year to BosKonfYear type 2: add program for that year 3: add import statement here",
      );
  }
  return replaceDefaultKeyValWithLanguageKeyValInPlace(json, language);
}

/**
 * Replaces default key value with the language key value in the json object if it exists.
 * Ex: language = "en"
 * `{ a: "value", a_en: "value_en" }` => `{ a: "value_en", a_en: "value_en" }`
 * @param json Any kind of json object
 * @param language
 * @returns
 */
export function replaceDefaultKeyValWithLanguageKeyValInPlace<T extends Object>(
  json: T,
  language: "en" | "no",
): T {
  if (language === "no") {
    return json;
  }

  const jsonCopy = JSON.parse(JSON.stringify(json)); // Deep copy to avoid modifying the original object
  traverseAndReplaceKeyValWithSuffixValue(jsonCopy, "_" + language);
  return jsonCopy;
}

/**
 * In place function, will modify the original object.
 * Goes through all keys in the json including nested objects and arrays
 * And replace the keys without suffix "_en" with the same key with suffix "_en"
 * Only if the key with suffix "_en" exists.
 * Ex:
 * {
 *  "key": "value",
 *  "key_en": "value_en"
 * }
 * =>
 * {
 *  "key": "value_en",
 *  "key_en": "value_en"
 * }
 * @param obj Any kind of json object
 * @param suffix The suffix to to look for and replace with ex: "_en"
 */
export function traverseAndReplaceKeyValWithSuffixValue(
  obj: any,
  suffix: string,
) {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const item of obj[key]) {
        traverseAndReplaceKeyValWithSuffixValue(item, suffix);
      }
    } else if (typeof obj[key] === "object") {
      traverseAndReplaceKeyValWithSuffixValue(obj[key], suffix);
    } else if (key.endsWith(suffix)) {
      obj[key.replace(suffix, "")] = obj[key];
    }
  }
}
