import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddWorkout.css';
import { TextField } from '@material-ui/core';

class AddWorkout extends Component {

    state = {
        date: this.props.date,
        exercise: this.props.workout,
        reps: '',
        weight: ''
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PREVIOUS',
            payload: this.props.workout
        })
    }

    addWorkout = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_WORKOUT',
            payload: this.state
        })
        this.props.dispatch({
            type: 'FETCH_WORKOUT',
            payload: this.state.date
        })
      
        this.props.showForm('showAddWorkout')
    }

    render() {
        return (
            <div className="addWorkoutForm">
                     <h3>{this.props.workout}</h3>
                     <p>Previous: {this.props.previous.reps}x{this.props.previous.weight}lbs.</p>
                <form onSubmit={this.addWorkout}>
                    <br />
                    <br />
                    <TextField
                        label="reps"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.calories}
                        onChange={this.handleInputChangeFor('reps')}
                    />
                    <br />
                    <br />
                    <TextField
                        label="weight (lbs)"
                        type="number"
                        variant="outlined"
                        name="name"
                        value={this.state.protein}
                        onChange={this.handleInputChangeFor('weight')}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default connect()(AddWorkout);