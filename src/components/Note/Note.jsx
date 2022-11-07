function Notes({ text }) {
  return (
    <div className='notes'>
      <div>
        <p>{text}</p>
      </div>
      <div className='icons'>
        <img
          style={{ marginRight: '1rem' }}
          src='./update-note.svg'
          alt='update'
        />
        <img src='./trash-solid.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;
