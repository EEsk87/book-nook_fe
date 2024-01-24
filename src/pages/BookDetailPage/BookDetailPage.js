import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookDetail.css";

function BookDetailPage() {
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q={SEARCH QUERY HERE}")
      .then((response) => setBookDetails(response.data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, []);
  <div className="book-detail-container">
    {bookDetails && (
      <>
        <div className="left-section">
          <h2>{bookDetails.title}</h2>
          <p>Author: {bookDetails.author}</p>
          <img
            src={bookDetails.imageUrl}
            alt={bookDetails.title}
            className="book-image"
          />
          <p>{bookDetails.description}</p>
        </div>
        <div className="right-section">
          {}
          <h3>Reviews</h3>
          <p>No reviews yet.</p>
          {}
        </div>
      </>
    )}
  </div>;
}

export default BookDetailPage;
