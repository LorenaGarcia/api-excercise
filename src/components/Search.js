import React, { useState, useEffect } from "react";

const Search = ({ onSearchChange, onSearchEmpty }) => {
  const [search, setSearch] = useState("");
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (search === "") {
      onSearchEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const OnclickSearch = (search) => {
    onSearchChange(search);
    setTextVisible(true);
  };

  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      <input
        style={{ margin: "15px", width: "50%", height: "30px" }}
        type="text"
        id="search"
        name="search"
        placeholder="Busca un personaje"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        style={{ width: "10%", height: "30px", borderRadius: "10px" }}
        type="button"
        onClick={() => OnclickSearch(search)}
      >
        Buscar
      </button>

      {textVisible && <p> Resultados para "{search}" </p>}
    </div>
  );
};

export default Search;
