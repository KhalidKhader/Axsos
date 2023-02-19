import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Form = () => {

  const [id, setId] = useState(1);
  const [category, setCategory] = useState("people");

  
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/" + category + "/" + id);
  }

  return (
    <div>
        <form onSubmit={(e) => handleSearch(e)}>
          <label htmlFor='category'>Search for:</label>
          <select name='category' onChange={e => setCategory(e.target.value)}>
            <option>people</option>
            <option>planets</option>
          </select>
          <label htmlFor='id'>ID: </label>
          <input type='text' name='id' onChange={e => setId(e.target.value)}></input>
          <button>Search</button>
        </form>
      </div>
  )
}

export default Form;