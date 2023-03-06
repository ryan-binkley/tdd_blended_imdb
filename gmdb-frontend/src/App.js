import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Detail from './Detail'
import Navbar from './Nav'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home setSelectedMovie={setSelectedMovie} />} />
        <Route path='/detail' element={<Detail selectedMovie={selectedMovie} />} />
      </Routes>
      
    </div>
  );
}

export default App;
