import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`} style={{ margin: "20px" }}>
      <img
        style={{ width: "10rem" }}
        alt={character.id}
        src={character.image}
      />
    </Link>
  );
};

export default CharacterItem;
