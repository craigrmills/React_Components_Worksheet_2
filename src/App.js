import React, { Component } from 'react';
import './App.css';
import SuperheroTable from './Components/SuperheroTable/SuperheroTable';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      superheroes: [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondaryAbility: 'Rich'
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondaryAbility: 'Fly'
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondaryAbility: 'Shoots web'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <SuperheroTable heroes={this.state.superheroes}/>
        {/* <SuperheroCreateForm/> */}
        {/* <Jokes/> */}
      </div>
    )
  }
}

export default App;