import { makeAutoObservable } from 'mobx';

interface IGameStore {
  selectedId: number;
  timeOver: boolean
  setSelectedId(payload: number): void;
  setTimeOver(payload: boolean): void;
}
const GameStore: IGameStore = {
  selectedId: 0,
  timeOver: false,
  setSelectedId(payload: number) {
    this.selectedId = payload;
  },
  setTimeOver(payload: boolean) {
    this.timeOver = payload;
  }
}
makeAutoObservable(GameStore);

export { GameStore };