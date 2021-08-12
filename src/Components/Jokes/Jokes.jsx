import React from 'react'

const Jokes = (props) => {
    return (
        <h2>{props.Jokes.setup}:{props.Jokes.punchline}</h2>
    )
}

export default Jokes;