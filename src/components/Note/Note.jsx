import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/reducer';

function Notes({ text, id }) {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodo(id));
    // console.log(id);
  };

  return (
    <div className='notes'>
      <div style={{ cursor: 'pointer' }} onClick={() => setDone(!done)}>
        <p
          style={
            done
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {text}
        </p>
      </div>
      <div className='icons'>
        <img style={{ marginRight: '1rem' }} src='./update.svg' alt='update' />
        <img onClick={() => deleteItem()} src='./delete.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;
