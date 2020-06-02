import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NutritionSettings.css';
import { TextField } from '@material-ui/core';

class NutritionSettings extends Component {

    state = {
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
        console.log(this.state)
        event.preventDefault();
        this.props.dispatch({
            type: 'PUT_GOALS',
            payload: this.state
        })
        console.log(this.state)
        // this.setState({
        //     description: '',
        //     calories: '',
        //     protein: '',
        //     carbs: '',
        //     fat: '',
        // })
        this.props.showForm('showSettings')
        
    }

    render() {
        return (
            <div className="settingsForm">
                    <h1>Settings</h1>
                <form onSubmit={this.addFood}>
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

export default connect()(NutritionSettings);