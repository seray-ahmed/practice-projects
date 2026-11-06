import { useState } from "react";

const initialBooks = [
  {
    id: 118836,
    title: "Пътят на кралете",
    author: "Брандън Сандерсън",
    image:
      "https://cdn.ozone.bg/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/p/a/4419c3aff075f2776ffa7a98a6c1ac4c/patyat-na-kralete-letopisite-na-svetlinata-na-buryata-1---obnoveno-izdanie-s-tvardi-koritsi-30.jpg",
    status: "reading", // опции: "read", "reading", "unread"
    rating: 5,
  },
  {
    id: 933372,
    title: "1984",
    author: "Джордж Оруел",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    status: "read",
    rating: 4,
  },
  {
    id: 499476,
    title: "Хобит",
    author: "Дж. Р. Р. Толкин",
    image: "https://m.media-amazon.com/images/I/710+HcoP38L.jpg",
    status: "unread",
    rating: 0,
  },
];

export default function App() {
  const [book, setBook] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState();
  const [showAddBook, setShowAddBook] = useState(false);

  function deleteBook(id) {
    const confirm = window.confirm(
      "Сигурни ли сте, че искате да изтриете тази книга?",
    );
    if (!confirm) return;
    const deletedBook = book.filter((book) => book.id !== id);
    setBook(deletedBook);
  }

  function handleSelectBook(book) {
    setSelectedBook((curr) => (curr?.id === book.id ? null : book));
    setShowAddBook(false);
  }

  function handleUpdateBook(updateBook) {
    setBook((book) =>
      book.map((b) => (b.id === updateBook.id ? updateBook : b)),
    );
    setSelectedBook(null);
  }
  function handleAddBook(newBook) {
    setBook((books) => [...books, newBook]);
    setShowAddBook(false);
  }

  function handleShowAddBook() {
    setShowAddBook((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <BookList
          book={book}
          selectedBook={selectedBook}
          onSelectedBook={handleSelectBook}
          deleteBook={deleteBook}
        />
        {showAddBook && <AddBook onAddBook={handleAddBook} />}
        <Button onClick={handleShowAddBook}>
          {showAddBook ? "Close" : "Add Book"}
        </Button>
      </div>
      {selectedBook && (
        <UpdateBook
          selectedBook={selectedBook}
          onUpdateBook={handleUpdateBook}
          key={selectedBook?.id}
        />
      )}
    </div>
  );
}

function BookList({ book, selectedBook, onSelectedBook, deleteBook }) {
  return (
    <ul>
      {book.map((book, key) => (
        <Book
          book={book}
          key={book.id}
          selectedBook={selectedBook}
          onSelectedBook={onSelectedBook}
          deleteBook={deleteBook}
        />
      ))}
    </ul>
  );
}

function Book({ book, selectedBook, onSelectedBook, deleteBook }) {
  const isSelection = selectedBook?.id === book.id;
  return (
    <li className={isSelection ? "selected" : ""}>
      <img src={book.image} alt={book.name} />
      <div>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
      </div>
      <div>
        <span className="raiting">Raiting: {book.rating} ⭐️ </span>
        <p className={book.status}>Book Status: {book.status}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Button onClick={() => onSelectedBook(book)}>
          {isSelection ? "Close" : "Select"}
        </Button>
        <button
          className="button delete-button"
          onClick={() => deleteBook(book.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function UpdateBook({ selectedBook, onUpdateBook }) {
  const [rating, setRating] = useState(selectedBook?.rating || 0);
  const [status, setStatus] = useState(selectedBook?.status || "unread");

  function handleSubmit(e) {
    e.preventDefault();
    const updated = {
      ...selectedBook,
      rating: rating,
      status: status,
    };
    onUpdateBook(updated);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Book: {selectedBook.title}</h2>

      <label>Author</label>
      <input type="text" disabled value={selectedBook.author} />
      <label>Raiting</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <label>Status</label>
      <select
        value={status}
        className={status}
        defaultValue={status.status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="reading">Reading</option>
        <option value="unread">Unread</option>
        <option value="read">Read</option>
      </select>
      <Button>Save</Button>
    </form>
  );
}

function AddBook({ onAddBook }) {
  const [book, setBook] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [raiting, setRating] = useState(0);
  const [status, setStatus] = useState("unread");

  function handleSubmit(e) {
    e.preventDefault();
    if (!book) return;
    const id = crypto.randomUUID();
    const newBook = {
      id: id,
      title: book,
      author: "Unknown Author",
      image,
      rating: raiting,
      status,
    };
    onAddBook(newBook);
    setBook("");
    setImage("");
    setRating(0);
    setStatus("unread");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Book Name📔</label>
      <input
        type="text"
        value={book}
        placeholder="Title..."
        onChange={(e) => setBook(e.target.value)}
      ></input>
      <label>Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <label>Raiting ⭐️</label>
      <select
        value={raiting}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <select
        value={status}
        className={status}
        defaultValue={status.status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="reading">Reading</option>
        <option value="unread">Unread</option>
        <option value="read">Read</option>
      </select>
      <Button>Add</Button>
    </form>
  );
}
