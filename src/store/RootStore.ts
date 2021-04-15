import CountStore from "../modules/Counter/CountStore";
import TodoListStore from "../modules/TodoList/TodoListStore";

class RootStore {
  countStore: CountStore;
  todoListStore: TodoListStore;

  constructor() {
    this.countStore = new CountStore();
    this.todoListStore = new TodoListStore();
  }
}

export default new RootStore();
