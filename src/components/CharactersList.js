import React from "react";
import CharacterItem from "./CharacterItem";

const CharactersList = ({ characters }) => {
  const characterItems = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <div>{characterItems}</div>
      </div>
    </div>
  );
};

export default CharactersList;
