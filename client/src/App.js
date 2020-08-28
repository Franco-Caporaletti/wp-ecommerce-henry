import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from '../src/components/Home';
import {Products} from '../src/components/Products';
// import {SearchBar} from '../src/components/SearchBar';
import {ProductCard} from '../src/components/ProductCard';
import AppBar from '../src/components/AppBar';


function App() {
  return (
    <div>
      
      <AppBar/>
    
     <div className="container">
      <ProductCard/>
     
      <Products/>
      </div>
    </div>
  );
}

export default App;
