import React from 'react'

function Child({some}){
    return(
        <div>
            <h2>Hello I'm from child component</h2>
            <ol>
                {some.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ol>
        </div>
    )
}

export default Child