import React, { useState } from "react";
import axios from "axios";
import "../style/SearchEngine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine({ setBookInfo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    if (input) {
      try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
          input
        )}&limit=24`;
        const response = await axios.get(url);
        if (response.data && response.data.docs) {
          const filteredBooks = response.data.docs.filter(
            (doc) =>
              doc.title &&
              doc.author_name &&
              doc.first_publish_year &&
              doc.cover_i
          );
          setBookInfo(filteredBooks);
        } else {
          setBookInfo([]);
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setBookInfo([]);
      }
    }
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-container">
      <form className="bookForm" onSubmit={handleSearch}>
        <input
          type="search"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter book title or author"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
