import { useState } from 'react';

function TextField() {
  const [text, setText] = useState(null);
  return (
    <div className='textField'>
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Start writing Task'
        value={text}
      />
      <img src='./circle-plus-solid.svg' alt='add' />
    </div>
  );
}

export default TextField;
