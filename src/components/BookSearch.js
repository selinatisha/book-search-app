import React, { useState } from "react";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import BookLibrary from "./BookLibrary";

export default function BookSearch() {
  let [bookInfo, setBookInfo] = useState(null);
  return (
    <div className="app-container">
      <div className="content">
        <div className="header">
          <h1>Search for books</h1>
          <SearchEngine setBookInfo={setBookInfo} />
        </div>
        <BookLibrary bookInfo={bookInfo} />
      </div>
      <Footer />
    </div>
  );
}
