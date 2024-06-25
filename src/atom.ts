import { atom } from "recoil";

interface TodoData {
  title: string;
  description: string;
  done: boolean;
}

export const dataAtom = atom<TodoData[]>({
  key: 'dataAtom',
  default: []
});