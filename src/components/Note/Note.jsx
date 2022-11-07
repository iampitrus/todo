import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/reducer';

function Notes({ text, id }) {
  const dispatch = useDispatch();
  const inputRef = useRef(true);

  const deleteItem = () => {
    dispatch(deleteTodo(id));
    // console.log(id);
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = () => {
    updateTodo({ id, text: inputRef.current.value });
    inputRef.current.disabled = true;
  };

  return (
    <div className='notes'>
      <div style={{ cursor: 'pointer' }}>
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={text}
          onMouseOut={() => update()}
        />
      </div>
      <div className='icons'>
        <img
          onClick={() => changeFocus()}
          style={{ marginRight: '1rem' }}
          src='./update.svg'
          alt='update'
        />
        <img onClick={() => deleteItem()} src='./delete.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;
