import React from "react";

const list = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="container">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default list;
