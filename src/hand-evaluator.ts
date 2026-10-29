import { Card } from "./card";

export function evaluateHand(hand: Card[]): number {
  return highestCardValue(hand);
}

function highestCardValue(hand: Card[]): number {
  return Math.max(...hand.map((card) => card.value));
}
