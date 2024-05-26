import { action, makeAutoObservable } from 'mobx';

/**
 * Counter Store
 */
class CounterStore {
  public constructor() {
    makeAutoObservable(this, {
      count: action.bound,
      getData: action.bound
    });
  }

  //public global: AppStore;

  public counter: number = 50;

  // @action.bound
  count() {
    this.counter += 1;
  }

  // @action.bound
  getData() {
    this.counter = 10;
  }
}

export { CounterStore };
