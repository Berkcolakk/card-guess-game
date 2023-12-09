import { makeAutoObservable } from 'mobx';

type TModeTypes = "easy" | "normal" | "hard";
class GameOptionStore {
  mode: TModeTypes = "easy"
  constructor() {
    makeAutoObservable(this);
  }

  setMode(payload: TModeTypes) {
    this.mode = payload;
  }
}

export const gameOptionStore = new GameOptionStore();