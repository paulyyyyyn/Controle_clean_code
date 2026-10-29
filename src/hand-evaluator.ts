import { Card } from "./card";

const THREE_OF_A_KIND_POINTS = 30;

export function evaluateHand(hand: Card[]): number {
  if (hasSameValueCount(hand, 3)) {
    return THREE_OF_A_KIND_POINTS;
  }
  return highestCardValue(hand);
}

function highestCardValue(hand: Card[]): number {
  return Math.max(...hand.map((card) => card.value));
}

function hasSameValueCount(hand: Card[], count: number): boolean {
  return countCardsByValue(hand).includes(count);
}

function countCardsByValue(hand: Card[]): number[] {
  const countByValue = new Map<number, number>();
  for (const card of hand) {
    countByValue.set(card.value, (countByValue.get(card.value) ?? 0) + 1);
  }
  return [...countByValue.values()];
}
