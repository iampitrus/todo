function Notes({ text }) {
  return (
    <div className='notes'>
      <div>
        <p>{text}</p>
      </div>
      <div className='icons'>
        <img style={{ marginRight: '1rem' }} src='./update.svg' alt='update' />
        <img src='./delete.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;
