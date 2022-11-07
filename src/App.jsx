import React, { useState } from 'react';
import { TextField, ShowTodo } from './components';

function App() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className='App'>
      <header>Todo List</header>
      <div className='notes_container'>
        {showInput && <TextField />}
        <ShowTodo />
        <button onClick={() => setShowInput(!showInput)}>
          {showInput ? 'Done' : 'New List'}
        </button>
      </div>
    </div>
  );
}

export default App;
