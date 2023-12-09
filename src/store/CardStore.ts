import { makeAutoObservable } from 'mobx';

class CardStore {
  selectedId = 0

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedId(payload: number) {
    this.selectedId = payload;
  }


}

export const counterStore = new CardStore();