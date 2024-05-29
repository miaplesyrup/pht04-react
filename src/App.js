import React from 'react';
import { useState } from 'react';
import Welcome from './pages/Welcome';
import "./App.css";
import LoginForm from './pages/LoginForm';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Counter from './pages/Counter';
import Navigation from './components/Navigation';
import Todo from './pages/Todo';
import Shows from './pages/Shows';

const App = () => {

  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/shows' element={<Shows />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>

    </> 
  )
}

export default App
