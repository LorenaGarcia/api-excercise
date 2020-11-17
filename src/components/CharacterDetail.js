import React from "react";

const Character = ({ character }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div>
        <img variant="top" src={character.image} alt={character.id} />
        <p>{character.name}</p>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export default Character;
