import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, tags }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <Tags key={index} text={tag.text} bg={tag.bg} width={tag.width} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCard;
