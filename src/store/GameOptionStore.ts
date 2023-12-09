import { makeAutoObservable } from 'mobx';

export type TModeTypes = "easy" | "normal" | "hard";

const gameOptionModule = {
  mode: localStorage?.mode,

  setMode(payload: TModeTypes) {
    this.mode = payload;
  }
};

makeAutoObservable(gameOptionModule);

export { gameOptionModule };