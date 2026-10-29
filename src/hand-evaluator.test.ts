import { Card } from "./card";
import { evaluateHand } from "./hand-evaluator";

describe("evaluateHand", () => {
  it("renvoie la valeur de la carte la plus haute quand la main n'a aucune combinaison", () => {
    const hand: Card[] = [
      { value: 3, suit: "trefle" },
      { value: 8, suit: "carreau" },
      { value: 10, suit: "coeur" },
      { value: 12, suit: "pique" },
      { value: 13, suit: "trefle" },
    ];

    expect(evaluateHand(hand)).toBe(13);
  });

  it("renvoie 30 points pour un brelan", () => {
    const hand: Card[] = [
      { value: 4, suit: "trefle" },
      { value: 4, suit: "carreau" },
      { value: 4, suit: "pique" },
      { value: 9, suit: "coeur" },
      { value: 13, suit: "trefle" },
    ];

    expect(evaluateHand(hand)).toBe(30);
  });

  it("renvoie 60 points pour un carré", () => {
    const hand: Card[] = [
      { value: 7, suit: "trefle" },
      { value: 7, suit: "carreau" },
      { value: 7, suit: "pique" },
      { value: 7, suit: "coeur" },
      { value: 2, suit: "trefle" },
    ];

    expect(evaluateHand(hand)).toBe(60);
  });
});
