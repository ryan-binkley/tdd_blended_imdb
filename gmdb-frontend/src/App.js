import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Nav'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
