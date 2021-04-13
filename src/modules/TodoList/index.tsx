import React from 'react'

interface IProps {}
interface IState {}

class TodoList extends React.PureComponent<IProps, IState>  {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
 render(){
   return (
     <div>todoList</div>
   )
 }
}

export default TodoList