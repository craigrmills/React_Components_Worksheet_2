import React from 'react';

const DisplayJoke = (props) => {
    return(
        <h1>{props.joke.setup} :|: {props.joke.punchline}</h1>
    )
}
 
export default DisplayJoke;