import React from 'react';
import NavBar from './components/NavBar/NavBarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
