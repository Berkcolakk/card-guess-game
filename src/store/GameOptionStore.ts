
import { TLanguage, TModeTypes } from '@/models/types/GameOption';
import { makeAutoObservable } from 'mobx';


interface IGameOptionModule {
  mode: TModeTypes;
  language: TLanguage;
  fullScreen: boolean;
  setMode(payload: TModeTypes): void;
  setLanguage(payload: string): void;
  setFullScreen(payload: boolean): void;
}
const gameOption: IGameOptionModule = {
  mode: typeof window !== "undefined" ? (localStorage?.mode ?? "easy") : "easy",
  language: typeof window !== "undefined" ? (localStorage?.language ?? "tr") : "tr",
  fullScreen: false,
  setMode(payload: TModeTypes) {
    this.mode = payload;
  },
  setLanguage(payload: TLanguage) {
    this.language = payload;
  },
  setFullScreen(payload: boolean) {
    this.fullScreen = payload;
  }
};

makeAutoObservable(gameOption);

export { gameOption };