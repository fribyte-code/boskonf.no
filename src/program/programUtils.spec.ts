import { describe, expect, it } from "vitest";
import { replaceDefaultKeyValWithLanguageKeyValInPlace } from "./programUtils";

describe("replaceDefaultKeyValWithLanguageKeyValInPlace", () => {
  it("should replace default key value with language key value", () => {
    const input = {
      key: "value",
      key_en: "value_en",
    };
    const expected = {
      key: "value_en",
      key_en: "value_en",
    };
    replaceDefaultKeyValWithLanguageKeyValInPlace(input, "en");
    expect(input).toEqual(expected);
  });

  it("supports nested objects", () => {
    const input = {
      a: {
        key: "value",
        key_en: "value_en",
      },
    };
    const expected = {
      a: {
        key: "value_en",
        key_en: "value_en",
      },
    };
    replaceDefaultKeyValWithLanguageKeyValInPlace(input, "en");
    expect(input).toEqual(expected);
  });

  it("supports arrays", () => {
    const input = {
      a: [
        {
          key: "value",
          key_en: "value_en",
        },
        {
          keyA: "value",
          keyA_en: "value_en",
        },
      ],
    };
    const expected = {
      a: [
        {
          key: "value_en",
          key_en: "value_en",
        },
        {
          keyA: "value_en",
          keyA_en: "value_en",
        },
      ],
    };
    replaceDefaultKeyValWithLanguageKeyValInPlace(input, "en");
    expect(input).toEqual(expected);
  });
});
