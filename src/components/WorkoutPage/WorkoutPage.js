import React, { Component } from 'react';
import './WorkoutPage.css';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { TableRow } from '@material-ui/core';
import moment from 'moment';
import AddWorkout from '../AddWorkout/AddWorkout';
import { InputAdornment, TextField, Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';
// import { Add as AddIcon, Settings as SettingsIcon } from '@material-ui/icons';


const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" + new Date().getFullYear();

class WorkoutPage extends Component {

    state = {
        date: date,
        search: '',
        workout: '',
        showAddWorkout: false,
    }

    showForm = (property) => {
        if (property === 'showAddWorkout') {
            this.setState({
                [property]: !this.state.showAddWorkout
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({
            search: this.search.value
        }, () => {
            if (this.state.search && this.state.search.length > 1) {
                if (this.state.search.length % 2 === 0) {
                    this.props.dispatch({ type: 'FETCH_WORKOUTS', payload: this.state.search })
                }
            }
        })
    }

    componentDidMount() {
        console.log(this.state.workout)
        this.props.dispatch({
            type: 'FETCH_WORKOUT',
            payload: this.state.date
        })
    }

    addWorkout = (workout) => {
        // this.props.dispatch({ type: 'POST_WORKOUT', payload: workout })
        this.setState({ search: '', showAddWorkout: true })
        this.setState({ workout: workout })

        // this.state.workout.push(workout);
    }


    render() {
        return (
            <div className="workoutPage">
                {/* <p>{moment(new Date()).format('MMMM Do')}</p> */}
                <h2>Workout Log</h2>
                <input
                    placeholder="search workouts..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    value={this.state.search}
                ></input>

                {/* <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    placeholder="search workouts..."
                    variant="outlined"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    value={this.state.search}
                /> */}
                <ul>
                    {this.state.search !== '' ?
                        this.props.workouts.map((workout) => {
                            return (
                                <div key={workout.value}>
                                    <p>{workout.value}</p>
                                    <button onClick={() => this.addWorkout(`${workout.value}`)}>Add</button>
                                </div>
                            )
                        }) : null}
                </ul>

                <Table style={{ width: 500 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise</TableCell>
                            <TableCell>Reps</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {this.props.currentWorkout.map((workout) => {
                            return (
                                <TableRow key={workout.id}>
                                    <TableCell>{workout.type}</TableCell>
                                    <TableCell>{workout.reps}</TableCell>
                                    <TableCell>{workout.weight}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
                <div>
                    {this.state.showAddWorkout === true ? (<AddWorkout previous={this.props.previousWorkout} workout={this.state.workout} date={this.state.date} showForm={this.showForm} />) : null}
                </div>

            </div>

        )
    }
};

const mapStateToProps = state => ({
    workouts: state.workouts.workoutReducer,
    currentWorkout: state.workouts.currentWorkoutReducer,
    previousWorkout: state.workouts.previousWorkoutReducer
});

export default connect(mapStateToProps)(WorkoutPage);