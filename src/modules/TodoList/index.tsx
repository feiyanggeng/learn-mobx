import React from 'react'
import { inject, observer } from 'mobx-react';
import TodoListStore, { Todo } from './TodoListStore';

interface IProps {
  todoListStore?: TodoListStore
}
interface IState {}

@inject("todoListStore")
@observer
class TodoList extends React.PureComponent<IProps, IState>  {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
  public completeTodo = (index: number, todo: Todo) => {
    const { updateTodo } = this.props.todoListStore!;
    updateTodo(index, todo);
  }
  public updateStoreName = () => {
    const { todoListStore } = this.props;
    todoListStore!.updateStoreName('T-O-D-O-S-T-O-R-E');
  }
  render() {
    const { todoList, storeName, count } = this.props.todoListStore!;
   return (
     <div>
       <h4>todoList; total: { count }</h4>
       <p>storeName: {storeName}</p>
       {
         todoList.map((todo: Todo, index: number) => {
           return (<div key={todo.id}>
             <input type="checkbox" checked={ todo.complete} onChange={() => this.completeTodo(index, {...todo, complete: !todo.complete})}/>
             {todo.content}
           </div>)
         })
       }
       <div>
         <p>修改 store name</p>
         <button onClick={this.updateStoreName }>修改 store name 为 T-O-D-O-S-T-O-R-E</button>
       </div>
      </div>
   )
 }
}

export default TodoList