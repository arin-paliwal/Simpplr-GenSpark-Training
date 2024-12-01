import { ReactNode } from "react";

export interface childrenInterface {
  children: ReactNode;
}

export type AppContextType = {
  state: string;
  setState: (state: string) => void;
};
