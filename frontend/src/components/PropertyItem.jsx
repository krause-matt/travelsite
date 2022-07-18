import React from "react";

export const PropertyItem = (data) => {
  const title = data.type;
  const capLetter = title.charAt(0).toUpperCase();
  const lowerLetters = title.slice(1);
  const formalTitle = capLetter + lowerLetters;

  return (
    <div className="property-item">
      <img className="property-image" src={data.image}></img>
      <div className="property-description">
        <span className="property-title">{`${formalTitle}s`}</span>
        <span className="property-count">
          {data.count} {`${formalTitle}s`}
        </span>
      </div>
    </div>
  );
};
