import { makeAutoObservable } from "mobx";
import RootStore from "../../store/RootStore";

class CountStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this);
  }
  public storeName: string = "CountStore";
  public num: number = 0;

  public update = (num: number) => {
    this.num = num;
  }
}

export default CountStore;
