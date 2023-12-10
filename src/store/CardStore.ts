import { makeAutoObservable } from 'mobx';

interface ICardStore {
  selectedId: number;
  setSelectedId(payload: number): void;

}
const CardStore: ICardStore = {
  selectedId: 0,
  setSelectedId(payload: number) {
    this.selectedId = payload;
  }
}
makeAutoObservable(CardStore);

export { CardStore };