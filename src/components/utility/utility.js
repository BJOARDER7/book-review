import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast('Successfully you added the book');   
  }
  else {
    toast("Already added, it cannot be duplicated!", {
      toastId: id
    });
  }
  
  }
  

export {getBookPage, saveBookPage}