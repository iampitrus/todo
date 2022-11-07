import React, { useState } from 'react';
import { TextField, Note } from './components';

function App() {
  const list = [
    { id: 0, text: 'lorem ipusm is the main deal' },
    { id: 1, text: 'lorem ipusm is the main deal' },
    { id: 2, text: 'lorem ipusm is the main deal' },
  ];
  const [showInput, setShowInput] = useState(false);
  return (
    <div className='App'>
      <header>Todo List</header>
      <div className='notes_container'>
        {showInput && <TextField />}
        {list.map((item) => (
          <Note text={item.text} key={item.id} />
        ))}
      </div>
      <button onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Done' : 'New List'}
      </button>
    </div>
  );
}

export default App;
