import { makeAutoObservable } from "mobx";

class CountStore {
  constructor() {
    makeAutoObservable(this);
  }
  public storeName: string = "CountStore";
  public num: number = 0;

  public update = (num: number) => {
    this.num = num;
  }
}

export default CountStore;
