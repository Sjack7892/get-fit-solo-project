import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddFood.css';
import { TextField } from '@material-ui/core';

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

    render() {
        return (
            <div className="addFoodForm">
                     <h1>Add Food</h1>
                <form onSubmit={this.addFood}>
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default connect()(AddFood);