import React, { useState } from 'react';
import { Header, Note } from './components';
import { useSelector } from 'react-redux';
import TextField from './components/TextField/TextField';
import Delete from './features/Delete';
import Update from './features/Update';

function App() {
  const list = useSelector((state) => state.todo.list);
  const [showInput, setShowInput] = useState(false);
  return (
    <div className='App'>
      <Header />
      <div className='notes_container'>
        {showInput && <TextField />}
        {list.map((each) => (
          <Note text={each.text} key={each.id} id={each.id}>
            <Update id={each.id} />
            <Delete id={each.id} />
          </Note>
        ))}
      </div>
      <button onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Done' : 'New List'}
      </button>
    </div>
  );
}

export default App;
