import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataComp from './DataComp';
const Display = () => {
    const [item, setItem] = useState({});
    const { category, id } = useParams();
    useEffect(() => {
        axios.get("https://swapi.dev/api/" + category + "/" + id)
        .then((response) => setItem(response.data))
        .catch((err) =>{setItem({error:err})})
    },[category,id]);
    return (

        category==="people"?
        <DataComp name={item.name} item1='Height' item2='Mass' item3='Hair Color' item4='Skin Color' 
        value1={item.height} value2={item.mass} value3={item.hair_color} value4={item.skin_color} cm='cm' kg='kg' />
        :
        <DataComp name={item.name} item1='Climate' item2='Terrain' item3='Surface Water' item4='Population' 
        value1={item.climate} value2={item.terrain} value3={item.surface_water} value4={item.population}/>
)    
}

export default Display