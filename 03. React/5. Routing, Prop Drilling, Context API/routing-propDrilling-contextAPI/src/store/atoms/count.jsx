import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom", //uniquely identify count
  default: 0, //default value og count
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
