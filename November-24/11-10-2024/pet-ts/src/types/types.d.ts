export interface PetType {
  id: number;
  name: string;
  animal: string;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
}

type LocalCache = {
  [key: string]: PetType[];
};