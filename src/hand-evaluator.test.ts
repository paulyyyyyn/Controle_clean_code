import { Card } from "./card";
import { evaluateHand, sumHandsPoints } from "./hand-evaluator";

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

  it("renvoie 50 points pour un full", () => {
    const hand: Card[] = [
      { value: 2, suit: "coeur" },
      { value: 2, suit: "pique" },
      { value: 2, suit: "carreau" },
      { value: 9, suit: "trefle" },
      { value: 9, suit: "pique" },
    ];

    expect(evaluateHand(hand)).toBe(50);
  });

  it("renvoie 45 points pour une couleur", () => {
    const hand: Card[] = [
      { value: 2, suit: "coeur" },
      { value: 7, suit: "coeur" },
      { value: 9, suit: "coeur" },
      { value: 11, suit: "coeur" },
      { value: 13, suit: "coeur" },
    ];

    expect(evaluateHand(hand)).toBe(45);
  });
});

describe("sumHandsPoints", () => {
  it("additionne les points de toutes les mains", () => {
    const fullHouse: Card[] = [
      { value: 2, suit: "coeur" },
      { value: 2, suit: "pique" },
      { value: 2, suit: "carreau" },
      { value: 9, suit: "trefle" },
      { value: 9, suit: "pique" },
    ];
    const flush: Card[] = [
      { value: 2, suit: "coeur" },
      { value: 7, suit: "coeur" },
      { value: 9, suit: "coeur" },
      { value: 11, suit: "coeur" },
      { value: 13, suit: "coeur" },
    ];
    const highCard: Card[] = [
      { value: 3, suit: "trefle" },
      { value: 8, suit: "carreau" },
      { value: 10, suit: "coeur" },
      { value: 12, suit: "pique" },
      { value: 13, suit: "trefle" },
    ];

    expect(sumHandsPoints([fullHouse, flush, highCard])).toBe(50 + 45 + 13);
  });
});
