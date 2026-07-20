import React from 'react'
import { useNavigate } from 'react-router-dom'

function Test( {test='defaul test value'}){
    const user = {
        name: 'John',
        age: 27
    }
    const navigate = useNavigate();

    function handleBackToHome() {
        navigate("/");
    }

    // const {name, age} = user;

    // console.log(`what is your name: ${name}  and you age: ${age}` );


    // const a = [ 1, 2, 3, 4, 5];
    // console.log('Values of a:', a);

    // console.log('Here we are going to use spread operator to copy it')
    // const b = [...a, 6, 7, 8];

    // console.log("Values of b: ", b)


    // console.log('-------------------------------------Rest operator ------------------------------------');

    // const c = [34,23,5,234,231,2542,5234,23];

    // const [firstVal, ...remaining ] = c;

    // console.log('Getting the value of firstVal', firstVal);
    // console.log('copying the remaining all the values in to remaining variable with the help of rest operator', remaining);


    return(
        <div>
            <h3>Testing the test componet</h3>
            <h4>{test}</h4>
            <button onClick={handleBackToHome}>Back to Home</button>
        </div>
    )
}

export default Test