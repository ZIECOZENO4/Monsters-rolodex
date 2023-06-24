

import React from 'react';
import "./card.styles.css";

const Card = ({monster}) => {
  const { name, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <footer>ZiecoZeno@catoon.network.com</footer>
    </div>
  );
};

export default Card;

