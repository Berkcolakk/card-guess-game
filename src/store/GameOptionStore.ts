import { makeAutoObservable } from 'mobx';

export type TModeTypes = "easy" | "normal" | "hard";
export type TLanguage = "tr" | "en";
interface IGameOptionModule {
  mode: TModeTypes;
  language: TLanguage;
  setMode(payload: TModeTypes): void;
  setLanguage(payload: string): void
}
const gameOptionModule: IGameOptionModule = {
  mode: localStorage?.mode ?? "",
  language: localStorage?.language ?? "tr",
  setMode(payload: TModeTypes) {
    this.mode = payload;
  },
  setLanguage(payload: TLanguage) {
    this.language = payload;
  },
};

makeAutoObservable(gameOptionModule);

export { gameOptionModule };