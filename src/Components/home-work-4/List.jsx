import React from 'react';

const List = ({ words = [] }) => {
  const elements = words.map((word, index) => {
    return (
      <div key={index} className="block">
        <h3>{word}</h3>
      </div>
    );
  });

  return <div className="list">{elements}</div>;
};

export default List;
