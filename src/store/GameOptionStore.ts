import { TLanguage, TModeTypes } from '@/models/types/GameOption';
import { makeAutoObservable } from 'mobx';


interface IGameOptionModule {
  mode: TModeTypes;
  language: TLanguage;
  setMode(payload: TModeTypes): void;
  setLanguage(payload: string): void
}
const gameOption: IGameOptionModule = {
  mode: localStorage?.mode ?? "",
  language: localStorage?.language ?? "tr",
  setMode(payload: TModeTypes) {
    this.mode = payload;
  },
  setLanguage(payload: TLanguage) {
    this.language = payload;
  },
};

makeAutoObservable(gameOption);

export { gameOption };