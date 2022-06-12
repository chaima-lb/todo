import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './page/Todo';
import Home from './page/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Todo />} />
      </Routes>
      
    </div>
  );
}

export default App;
