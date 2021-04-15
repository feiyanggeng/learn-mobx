import React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import CountStore from './CountStore';

interface IProps {
  countStore?: CountStore
}
interface IState { }

@inject("countStore")
@observer
class Counter extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
  private onClickAdd = () => {
    const { num, update } = this.props.countStore!;
    const cur = num + 1
    update(cur)
  }
  render() {
    const { num, storeName } = this.props.countStore!;
   return (
     <div>
       <p>{ storeName }</p>
       <button> - </button>
       <span>{num}</span>
       <button onClick={this.onClickAdd}> + </button>
    </div>
   )
 }
}

const CounterView = () => <Provider countStore={new CountStore()}>
  <Counter />
</Provider>

export default CounterView