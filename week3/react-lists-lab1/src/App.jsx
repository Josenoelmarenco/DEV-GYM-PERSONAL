import './Book.css'
import './App.css'
import {Book} from './Book'
import booksData from './bookData'

function App() {
  return (
    <div className='App'>
      <h1>Book List</h1>
      <div className='book-list'>
        {booksData.map((b) => (
          <Book key={b.id} book={b} />
        ))}
      </div>
     </div>
  );
}

export default App
