import React from 'react';

const fruits = ({ fruits , addApple, removeApple, addOrange, clearFruits, removeOrange}) => (
    <div>
        <h1>Fruits</h1>
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>

        <button onClick={addApple}>Add Apples</button>
        <button onClick={addOrange}>Add Oranges</button>
        <button onClick={removeApple}>Remove Apple</button>
        <button onClick={removeOrange}>Remove Oranges</button>
        <button onClick={clearFruits}>clear All</button>
    </div>
)

export default fruits;