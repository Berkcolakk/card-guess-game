import { ICards } from '@/models/interfaces/Chapter';
import { makeAutoObservable } from 'mobx';

interface IGameStore {
  allCards: ICards[];
  timeOver: boolean;
  chapter: number;
  loadingBoxFinish: boolean;
  setAllCards(payload: ICards[]): void;
  setTimeOver(payload: boolean): void;
  setLoadingBoxFinish(payload: boolean): void;
  setChapter(payload: number): void;
}
const GameStore: IGameStore = {
  allCards: [],
  timeOver: false,
  chapter: 1,
  loadingBoxFinish: false,
  setAllCards(payload: ICards[]) {
    this.allCards = payload;
  },
  setTimeOver(payload: boolean) {
    this.timeOver = payload;
  },
  setLoadingBoxFinish(payload: boolean) {
    this.loadingBoxFinish = payload;
  },
  setChapter(payload: number) {
    this.chapter = payload;
  }
}
makeAutoObservable(GameStore);

export { GameStore };