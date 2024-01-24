import React from "react";
import "./BookDetail.css";

function BookDetailPage() {
  const bookDetails = {
    title: " ",
    author: " ",
    description: " ",
    imageUrl: "https://example.com/sample-image.jpg",
  };

  return (
    <div className="book-detail-container">
      <h2>{bookDetails.title}</h2>
      <p>Author: {bookDetails.author}</p>
      <img
        src={bookDetails.imageUrl}
        alt={bookDetails.title}
        className="book-image"
      />
      <p>{bookDetails.description}</p>
    </div>
  );
}

export default BookDetailPage;
