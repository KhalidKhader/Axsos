import React from 'react'

function DataComp(props) {
  return (
    <div>
            <h1>{props.name}</h1>
            <p><strong>{props.item1}: </strong>{props.value1} {props.cm}</p>
            <p><strong>{props.item2}: </strong>{props.value2} {props.kg}</p>
            <p><strong>{props.item3}: </strong>{props.value3}</p>
            <p><strong>{props.item4}: </strong>{props.value4}</p>
        </div>
  )
}

export default DataComp