import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BooksPage.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/student/books/');
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch books. Please try again later.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="books-container">
      <h1 className="books-title">Available Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-image">
              {book.cover_image ? (
                <img src={book.cover_image} alt={book.title} />
              ) : (
                <div className="book-placeholder">📚</div>
              )}
            </div>
            <div className="book-info">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">By {book.author}</p>
              <p className="book-isbn">ISBN: {book.isbn}</p>
              <p className="book-date">Published: {formatDate(book.published_date)}</p>
              <div className="book-status">
                <span className={`status-badge ${book.available ? 'available' : 'unavailable'}`}>
                  {book.available ? 'Available' : 'Not Available'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage; 