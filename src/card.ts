export type Suit = "coeur" | "carreau" | "trefle" | "pique";

export interface Card {
  value: number;
  suit: Suit;
}
