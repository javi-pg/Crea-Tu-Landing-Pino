import React from 'react';
import Boton from "./Boton"
function ItemListContainer ({ message }) {
  return (
    <div >
      <h2>{message}</h2>
      <Boton color="Red" label="SALE hasta 70%!" onClick ={()=>alert ("busca la sección SALE")}/>
    </div>
  );
}

export default ItemListContainer;