import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddFood.css';
import { TextField, Button } from '@material-ui/core';

class AddFood extends Component {

    state = {
        date: this.props.date,
        description: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });

    }

    addFood = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_NUTRITION',
            payload: this.state
        })
        this.props.showForm('showAddFood')
    }

    autoFillForm = () => { 
        this.setState({
        description: 'McChicken',
        calories: '4000',
        protein: '14',
        carbs: '39',
        fat: '21',
        })
      }

    render() {
        return (
            <div className="addFoodForm">
                <h3 style={{marginBottom: 0}}>Add Food</h3>
                <form onSubmit={this.addFood}>
                    <br />
                    <br />
                    <TextField
                        label="description"
                        type="text"
                        variant="outlined"
                        name="name"
                        value={this.state.description}
                        onChange={this.handleInputChangeFor('description')}
                    />
                    <br />
                    <br />
                    <TextField
                        label="calories"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.calories}
                        onChange={this.handleInputChangeFor('calories')}
                    />
                    <br />
                    <br />
                    <TextField
                        label="protein (g)"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.protein}
                        onChange={this.handleInputChangeFor('protein')}
                    />
                    <br />
                    <br />
                    <TextField
                        label="carbs (g)"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.carbs}
                        onChange={this.handleInputChangeFor('carbs')}
                    />
                    <br />
                    <br />
                    <TextField
                        label="fat (g)"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.fat}
                        onChange={this.handleInputChangeFor('fat')}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="outlined">Add</Button>
                    
                </form>
                <button className="hiddenButton" onClick={this.autoFillForm}>Hidden</button>
            </div>
        )
    }
}

export default connect()(AddFood);