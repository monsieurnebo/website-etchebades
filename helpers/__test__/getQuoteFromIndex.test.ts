import { describe, expect, it } from "@jest/globals";
import getQuoteFromIndex from "../getQuoteFromIndex";
import quotes from "@/data/quotes";

describe("getQuoteFromIndex", () => {
  it("should return the right quote", () => {
    const expectedOutput = quotes[5];
    const output = getQuoteFromIndex(5);

    expect(output).toEqual(expectedOutput);
  });

  it("should return null for an unavailable index", () => {
    const output = getQuoteFromIndex(1000);

    expect(output).toBeNull();
  });
});

