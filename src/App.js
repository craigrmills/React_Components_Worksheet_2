import React, { Component } from 'react';
import './App.css';
import SuperheroTable from './Components/SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './Components/SuperheroCreateForm/SuperheroCreateForm';
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

  addNewSuperhero(superhero){
    let tempSuperhero = this.state.superheroes
    tempSuperhero.push(superhero);
    this.setState({
      superheroes: tempSuperhero
    })
  }

  render() {
    if (this.state.loading) return null;
    else{
      return (
        <React.Fragment>
          <SuperheroTable heroes={this.state.superheroes}/>
          <SuperheroCreateForm addNewSuperhero={this.addNewSuperhero.bind(this)} superheroArray={this.state.superheroes}/>
          {/* <Jokes/> */}
        </React.Fragment>
      )
    }
  }
}

export default App;