import { makeAutoObservable } from 'mobx';

export type TModeTypes = "easy" | "normal" | "hard";

const gameOptionModule = {
  mode: localStorage?.mode,
  language: localStorage?.language ?? "tr",
  setMode(payload: TModeTypes) {
    this.mode = payload;
  },
  setLanguage(payload: string) {
    this.language = payload;
  },
};

makeAutoObservable(gameOptionModule);

export { gameOptionModule };