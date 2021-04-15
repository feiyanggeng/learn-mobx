import React from 'react';
import TodoList from "./modules/TodoList";
import Counter from './modules/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
      <Counter />
    </div>
  );
}

export default App;
