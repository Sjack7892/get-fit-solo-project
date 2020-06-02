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
        console.log(this.state)
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_NUTRITION',
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
        this.props.showForm('showAddFood')
        // this.props.dispatch({type: 'FETCH_TOTALS'})
    }

    render() {
        return (
            <div className="addFoodForm">
                     <h1>Add Food</h1>
                <form onSubmit={this.addFood}>
                    {/* <InputLabel>
                        Description
                    </InputLabel> */}
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
                    {/* <InputLabel>
                        Calories
                    </InputLabel> */}
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
                    {/* <InputLabel>
                        Protein (g)
                    </InputLabel> */}
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
                    {/* <InputLabel>
                        Carbs (g)
                    </InputLabel> */}
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
                    {/* <InputLabel>
                        Fat (g)
                    </InputLabel> */}
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