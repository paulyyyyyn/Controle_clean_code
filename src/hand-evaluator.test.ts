import { Card } from "./card";
import { evaluateHand } from "./hand-evaluator";

describe("evaluateHand", () => {
  it("returns the highest card value when the hand has no combination", () => {
    const hand: Card[] = [
      { value: 3, suit: "trefle" },
      { value: 8, suit: "carreau" },
      { value: 10, suit: "coeur" },
      { value: 12, suit: "pique" },
      { value: 13, suit: "trefle" },
    ];

    expect(evaluateHand(hand)).toBe(13);
  });
});
