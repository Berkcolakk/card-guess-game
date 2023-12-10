import { makeAutoObservable } from 'mobx';

interface IGameStore {
  selectedId: number;
  setSelectedId(payload: number): void;

}
const GameStore: IGameStore = {
  selectedId: 0,
  setSelectedId(payload: number) {
    this.selectedId = payload;
  }
}
makeAutoObservable(GameStore);

export { GameStore };