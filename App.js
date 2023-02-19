import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Display from './lukeApi/components/Display';
import Form from './lukeApi/components/Form';

function App() {
  return(
    <div className='App'>
      <Form/>
      <Routes>
        <Route path="/:category/:id" element={<Display/>} />
      </Routes>

    </div>
  )
}

export default App;
