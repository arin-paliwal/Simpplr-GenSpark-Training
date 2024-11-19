import { Category } from "../types/user-interface";

export const initialSuggestions: Record<Category, string[]> = {
  Mountains: [
    "Pack sturdy hiking boots for trekking.",
    "Carry a durable backpack for essentials.",
    "Bring a thermal jacket to stay warm.",
    "Include a flashlight with extra batteries.",
    "Pack energy bars and trail mix for snacks.",
  ],
  Beaches: [
    "Pack your swimsuit and beachwear.",
    "Bring sunscreen to avoid sunburn.",
    "Include a beach umbrella for shade.",
    "Carry a cooler for refreshing drinks.",
    "Pack a waterproof phone case.",
  ],
  "College Trip": [
    "Bring a notebook and pens for quick notes.",
    "Pack a camera to capture group memories.",
    "Carry snacks for the bus or train ride.",
    "Include comfortable sneakers for walking.",
    "Bring a portable speaker for entertainment.",
  ],
  "Wedding Function": [
    "Pack traditional or formal attire.",
    "Carry matching accessories for outfits.",
    "Include a gift for the bride and groom.",
    "Bring a camera or smartphone for photos.",
    "Carry comfortable shoes for dancing.",
  ],
  "Space Trip": [
    "Pack a spacesuit for zero-gravity conditions.",
    "Carry a camera to capture breathtaking views.",
    "Bring a journal to document your experience.",
    "Include protein-packed, freeze-dried food.",
    "Carry an emergency oxygen kit.",
  ],
};
