function Notes({ text, children }) {
  return (
    <div className='notes'>
      <div>
        <p>{text}</p>
      </div>
      <div className='icons'>{children}</div>
    </div>
  );
}

export default Notes;
