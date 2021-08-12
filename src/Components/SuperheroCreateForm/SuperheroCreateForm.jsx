import React, { Component } from 'react'

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const superhero = {
            superheroId: this.props.superheroArray.length +1,
            name: this.state.superheroName,
            primaryAbility: this.state.superheroPrimaryAbility,
            secondaryAbility: this.state.superheroSecondaryAbility
        }
        this.props.addNewSuperhero(superhero);
        console.log(this.props.superheroArray)
        this.setState({
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        });
    }

    render() {
        return (
            <div>
                <h3>Add New Superhero</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>Superhero Name</label>
                            <input type="text" name='superheroName' value={this.state.superheroName} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Primary Ability</label>
                            <input type="text" name='superheroPrimaryAbility' value={this.state.superheroPrimaryAbility} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Secondary Ability</label>
                            <input type="text" name='superheroSecondaryAbility' value={this.state.superheroSecondaryAbility} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="submit" value='Add'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SuperheroCreateForm;