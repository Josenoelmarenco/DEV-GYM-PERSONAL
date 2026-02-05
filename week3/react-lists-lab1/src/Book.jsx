export const Book = ({ book }) => (
  <article className="book">
    <h2 className="book-title">Title: {book.title}</h2>
    <p><strong>Author:</strong> {book.author}</p>
    <p><strong>Genre:</strong> {book.genre}</p>
    <p><strong>Year:</strong> {book.year}</p>
  </article>
);
