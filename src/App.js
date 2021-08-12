import React, { Component } from 'react';
import './App.css';
import SuperheroTable from './Components/SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './Components/SuperheroCreateForm/SuperheroCreateForm';
import DisplayJoke from './Components/DisplayJoke/DisplayJoke';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        loading: true,
        jokes: [],
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

  componentDidMount() {
    this.getJokes();    
  }

  async getJokes() {
    let response = await axios.get('https://official-joke-api.appspot.com/jokes/ten')
    let allJokes = response.data
    this.setState({
      jokes: allJokes,
      loading: false
    });
  }

  randomIndex = () => {
    let randomIndex = Math.floor(Math.random() * (0, this.state.jokes.length))
    return randomIndex
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
          <DisplayJoke joke={this.state.jokes[this.randomIndex()]}/>
        </React.Fragment>
      )
    }
  }
}

export default App;