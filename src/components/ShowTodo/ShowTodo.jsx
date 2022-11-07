import { useSelector } from 'react-redux';

import Note from '../Note/Note';

function ShowTodo() {
  const list = useSelector((state) => state);
  return (
    <>
      {list &&
        list.map((item) => (
          <Note text={item.item} key={item.id} id={item.id} />
        ))}
    </>
  );
}

export default ShowTodo;
