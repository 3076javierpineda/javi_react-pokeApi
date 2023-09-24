import React, { Component } from 'react';
import './App.css';
import PokemonInfo from './Components/PokemonInfo';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonInfo />
      <Footer />
    </div>
  );
}

export default App;
