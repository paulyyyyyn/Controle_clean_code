import { Card } from "./card";

const THREE_OF_A_KIND_POINTS = 30;
const FLUSH_POINTS = 45;
const FULL_HOUSE_POINTS = 50;
const FOUR_OF_A_KIND_POINTS = 60;

export function evaluateHand(hand: Card[]): number {
  if (hasSameValueCount(hand, 4)) {
    return FOUR_OF_A_KIND_POINTS;
  }
  if (hasSameValueCount(hand, 3) && hasSameValueCount(hand, 2)) {
    return FULL_HOUSE_POINTS;
  }
  if (isFlush(hand)) {
    return FLUSH_POINTS;
  }
  if (hasSameValueCount(hand, 3)) {
    return THREE_OF_A_KIND_POINTS;
  }
  return highestCardValue(hand);
}

function highestCardValue(hand: Card[]): number {
  return Math.max(...hand.map((card) => card.value));
}

function isFlush(hand: Card[]): boolean {
  return hand.every((card) => card.suit === hand[0].suit);
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
