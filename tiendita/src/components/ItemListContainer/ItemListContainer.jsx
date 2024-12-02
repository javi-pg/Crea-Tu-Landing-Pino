import React from 'react';

function ItemListContainer({ message }) {
  return (
    <section style={{ padding: '20px' }}>
      <h2>{message}</h2>
    </section>
  );
}

export default ItemListContainer;