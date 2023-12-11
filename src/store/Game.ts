import { makeAutoObservable } from 'mobx';

interface IGameStore {
  selectedId: number;
  timeOver: boolean
  loadingBoxFinish: boolean;
  setSelectedId(payload: number): void;
  setTimeOver(payload: boolean): void;
  setLoadingBoxFinish(payload: boolean): void;

}
const GameStore: IGameStore = {
  selectedId: 0,
  timeOver: false,
  loadingBoxFinish: false,
  setSelectedId(payload: number) {
    this.selectedId = payload;
  },
  setTimeOver(payload: boolean) {
    this.timeOver = payload;
  },
  setLoadingBoxFinish(payload: boolean) {
    debugger
    this.loadingBoxFinish = payload;
  }
}
makeAutoObservable(GameStore);

export { GameStore };