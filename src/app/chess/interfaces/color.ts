export const COLOR = {
  WHITE: "white",
  BLACK: "black",
} as const;

export type COLOR = typeof COLOR[keyof typeof COLOR];