import React from 'react';

const Avatar = ({ item }) => {
  const { description } = item;
  const activeError = () => {
    throw new Error('Click error');
  };
  return (
    <div>
      <span>{description}</span>
      <button onClick={activeError}>Acionar Error</button>
    </div>
  );
};

export { Avatar };
