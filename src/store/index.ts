import { action, observable, makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  @observable public num: number = 0;

  // 使用@action 更改被观察者
  @action.bound
  public add() {    
    this.num++;
  }
}

export default Store;
