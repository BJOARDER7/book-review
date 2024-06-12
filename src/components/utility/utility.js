

const getBookPage = () => {
  const getBook = localStorage.getItem('book-item');
  if(getBook){
    return JSON.parse(getBook);
  }
  return [];
}

const saveBookPage = id => {
  const saveBooks = getBookPage();
  const exists = saveBooks.find(bookId => bookId === id);
  if(!exists){
    saveBooks.push(id);
    localStorage.setItem('book-item', JSON.stringify(saveBooks))
  }
}

export {getBookPage, saveBookPage}