import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        // this.props.dispatch({
        //     type: 'FETCH_NUTRITION',
        //     payload: this.props.date
        // })
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <p>{this.props.date}</p>
                <form onSubmit={this.addFood}>
                    <label>
                        Description:
                    <input
                            type="text"
                            name="name"
                            value={this.state.description}
                            onChange={this.handleInputChangeFor('description')}
                        />
                    </label>
                    <label>
                        Calories:
                    <input
                            type="number"
                            name="name"
                            value={this.state.calories}
                            onChange={this.handleInputChangeFor('calories')}
                        />
                    </label>
                    <label>
                        Protein:
                    <input
                            type="number"
                            name="name"
                            value={this.state.protein}
                            onChange={this.handleInputChangeFor('protein')}
                        />
                    </label>
                    <label>
                        Carbs:
                    <input
                            type="number"
                            name="name"
                            value={this.state.carbs}
                            onChange={this.handleInputChangeFor('carbs')}
                        />
                    </label>
                    <label>
                        Fat:
                    <input
                            type="number"
                            name="name"
                            value={this.state.fat}
                            onChange={this.handleInputChangeFor('fat')}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}



export default connect()(AddFood);