import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NutritionSettings.css';
import { TextField, Button } from '@material-ui/core';

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
        event.preventDefault();
        this.props.dispatch({
            type: 'PUT_GOALS',
            payload: this.state
        })
        this.props.showForm('showSettings')
    }

    autoFillForm = () => { 
        this.setState({
        calories: '3000',
        protein: '225',
        carbs: '300',
        fat: '100',
        })
      }

    render() {
        return (
            <div className="settingsForm">
                <h3 style={{marginBottom: 0}}>Set Goals</h3>
                <br />
                <br />
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
                    <br />
                    <Button type="submit" variant="outlined">Add</Button>
                </form>
                <button className="hiddenButton" onClick={this.autoFillForm}>Hidden</button>
            </div>
        )
    }
}

export default connect()(NutritionSettings);