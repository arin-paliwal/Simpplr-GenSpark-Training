export type Category =
  | "Mountains"
  | "Beaches"
  | "College Trip"
  | "Wedding Function"
  | "Space Trip"
  | "ALL";

export interface TodoItem {
  id: number;
  text: string;
  category: Category;
  completed: boolean;
}
