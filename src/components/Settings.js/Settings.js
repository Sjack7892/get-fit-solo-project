import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddFood.css';
import { InputLabel, Input, TextField } from '@material-ui/core';

class AddFood extends Component {

    state = {
        date: this.props.date,
        goalCalories: '',
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
            type: 'POST_NUTRITION',
            payload: this.state
        })
        console.log(this.state)

    }

    render() {
        return (
            <div className="addFoodForm">
                <form onSubmit={this.addFood}>
                    <InputLabel>
                        Description:
                    </InputLabel>
                    <Input
                        type="text"
                        variant="outlined"
                        name="name"
                        value={this.state.description}
                        onChange={this.handleInputChangeFor('description')}
                    />
                       {/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}

                    <br />
                    <InputLabel>
                        Calories:
                    </InputLabel>
                    <Input
                        type="number"
                        name="name"
                        value={this.state.calories}
                        onChange={this.handleInputChangeFor('calories')}
                    />

                    <br />
                    <InputLabel>
                        Protein:
                    </InputLabel>
                    <Input
                        type="number"
                        name="name"
                        value={this.state.protein}
                        onChange={this.handleInputChangeFor('protein')}
                    />

                    <br />
                    <InputLabel>
                        Carbs:
                    </InputLabel>
                    <Input
                        type="number"
                        name="name"
                        value={this.state.carbs}
                        onChange={this.handleInputChangeFor('carbs')}
                    />

                    <br />
                    <InputLabel>
                        Fat:
                    </InputLabel>
                    <Input
                        type="number"
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

export default connect()(Settings);