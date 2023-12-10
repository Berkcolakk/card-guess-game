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
  mode: localStorage?.mode ?? "",
  language: localStorage?.language ?? "tr",
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