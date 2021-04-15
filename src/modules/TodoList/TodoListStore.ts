import { action, computed, observable, makeObservable } from "mobx";

export type Todo = {
  id: string,
  complete: boolean;
  content: string;
  isEdit: boolean;
}

class TodoListStore {
  constructor() {
    makeObservable(this);
  }
  public storeName: string = "TodoListStore";
  @observable public todoList: Todo[] = [
    {
      id: "hajkdhiuiu-1297as-12lkdsjkj",
      complete: true,
      content: "创建OKR",
      isEdit: false,
    },
    {
      id: "adjkhk-duyqyr8e-dsjbafj-dadsjfkj",
      complete: false,
      content: "提取idaas-web脚本工具",
      isEdit: false,
    },
  ];

  @computed
  get count() {
    return this.todoList.length
  }

  @action.bound
  public update(todoList: Todo[]) {
    this.todoList = todoList;
  }

  @action.bound
  public updateTodo(index: number, todo: Todo) {
    this.todoList[index] = todo;
  }

  @action.bound
  public updateStoreName(storeName: string) {
    this.storeName = storeName
  }
}

export default TodoListStore;
