import React from "react";
import "../style/BookLibrary.css"; // Import your custom CSS for BookLibrary

function BookLibrary({ bookInfo }) {
  return (
    <div className="book-container">
      <div className="book-row">
        {bookInfo &&
          bookInfo.map((book, index) => (
            <div key={index} className="book-card">
              <div className="card">
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="card-img"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    Author:{" "}
                    {book.author_name ? book.author_name.join(", ") : "N/A"}
                  </p>
                  <p className="card-text">
                    First Published Year: {book.first_publish_year || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookLibrary;
