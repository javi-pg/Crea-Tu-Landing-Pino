import React from 'react';
import NavBar from './components/NavBarr';
import ItemListContainer from './components/ItenListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <NavBar />
    <ItemListContainer message= "Bienvenidos a nuestra tienda" />
    
   </>
  );
}

export default App;
