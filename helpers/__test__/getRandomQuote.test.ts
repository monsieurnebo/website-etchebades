import { describe, expect, it } from "@jest/globals";
import getRandomQuote from "../getRandomQuote";

describe("getRandomQuote", () => {
  it("should return a quote", () => {
    const output = getRandomQuote();

    expect(output.text).toBeDefined();
  });
});

