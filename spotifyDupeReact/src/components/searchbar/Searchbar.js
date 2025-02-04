import React, { useState, useEffect } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultArtist, setResultArtist] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      setShowResults(false);
      return;
    }

    const searchArtist = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/artists?name_like=${searchTerm}`
        );
        const data = await response.json();

        if (data.length > 0) {
          setResultArtist(data[0]);
          setShowResults(true);
        }
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    searchArtist();
  }, [searchTerm]);

  return (
    <div>
      <div className="header__search">
        <img src={require("../../assets/icons/search.png")} alt="Buscar" />
        <input
          id="search-input"
          type="text"
          maxLength="800"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      {showResults && resultArtist && (
        <div id="result-artist">
          <div className="grid-container">
            <div className="artist-card">
              <div className="card-img">
                <img
                  id="artist-img"
                  className="artist-img"
                  src={resultArtist.urlImg}
                  alt={resultArtist.name}
                />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <a title={resultArtist.name} className="vst" href="">
                  <span className="artist-name">{resultArtist.name}</span>
                  <span className="artist-categorie">{resultArtist.genre}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
