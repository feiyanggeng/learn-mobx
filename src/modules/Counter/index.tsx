import React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../store';

interface IProps {
  store?: Store
}
interface IState {}

@inject("store")
@observer
class Counter extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
  private onClickAdd = () => {
    this.props.store!.add()
  }
  render() {
    const { num } = this.props.store!;
   return (
     <div>
       <button> - </button>
       <span>{num}</span>
       <button onClick={this.onClickAdd}> + </button>
    </div>
   )
 }
}

export default Counter