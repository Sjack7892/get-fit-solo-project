import React, { Component } from 'react';
import './WorkoutPage.css';
import { connect } from 'react-redux';
// import AddFood from '../AddFood/AddFood';
// import ProgressBar from '../ProgressBar/ProgressBar';
// import FoodItem from '../FoodItem/FoodItem';
// import { Add as AddIcon, Settings as SettingsIcon } from '@material-ui/icons';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import NutritionSettings from '../NutritionSettings/NutritionSettings'
// import { TableRow } from '@material-ui/core';


const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" + new Date().getFullYear();

class WorkoutPage extends Component {

    state = {
        date: date,
        search: '',
        workout: []
        // showAddFood: false,
        // showSettings: false,
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
        // this.props.dispatch({ type: 'FETCH_WORKOUTS', payload: this.state.search })
      }

    componentDidMount() {
        console.log(this.state.workout)
        // this.props.dispatch({ type: 'FETCH_WORKOUTS', payload: this.state.search })
        // this.props.dispatch({ type: 'FETCH_FOOD' })
        // this.props.dispatch({ type: 'FETCH_TOTALS' })
    }

      addWorkout = (workout) => {
          console.log('button clicked')
          this.state.workout.push(workout);
          console.log(this.state.workout)
      }


    //   showForm = (property) => {
    //     if (property === 'showAddFood') {
    //       this.setState({
    //         [property]: !this.state.showAddFood
    //       })
    //       console.log(this.state.showAddFood)
    //     } else if (property === 'showSettings') {
    //       this.setState({
    //         [property]: !this.state.showSettings
    //       })
    //       console.log(this.state.showSettings)
    //     }
    //   }

    render() {
        return (
            <div>
                <h1>Workout Page! {JSON.stringify(this.state.workout)}</h1>
                <input 
                placeholder="search workouts..."
                // value={this.state.query}
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                ></input>
                <ul>
                    {this.state.search !== '' ?
                    this.props.workouts.map((workout) => {
                        return (
                            <div key={workout.value}>
                            <p>{workout.value}</p>
                            <button onClick={() => this.addWorkout(`${workout.value}`)}>Add</button>
                            </div> 
                        )
                        
                    }) : null }
                    </ul>

            </div>

        )

        // return (
        //   <div className="nutritionPage">
        //     <div className="dataChart">
        //       <p>Today</p>
        //       <ProgressBar
        //         name="Calories"
        //         unit=""
        //         goal={this.props.calorieGoal}
        //         total={this.props.calorieTotal}
        //       />
        //       <ProgressBar
        //         name="Protein"
        //         unit="g"
        //         goal={this.props.proteinGoal}
        //         total={this.props.proteinTotal}
        //       />
        //       <ProgressBar
        //         name="Carbs"
        //         unit="g"
        //         goal={this.props.carbsGoal}
        //         total={this.props.carbsTotal}
        //       />
        //       <ProgressBar
        //         name="Fat"
        //         unit="g"
        //         goal={this.props.fatGoal}
        //         total={this.props.fatTotal}
        //       />
        //       <button onClick={() => this.showForm('showAddFood')}><AddIcon /></button>
        //       <button onClick={() => this.showForm('showSettings')}><SettingsIcon /></button>
        //     </div>

        //     <div>
        //       {this.state.showAddFood === true ? (<AddFood date={this.state.date} showForm={this.showForm} />) : null}
        //     </div>

        //     <div>
        //       {this.state.showSettings === true ? (<NutritionSettings showForm={this.showForm} />) : null}
        //     </div>

        //     <Table style={{ width: 500 }}>
        //       <TableHead>
        //         <TableRow>
        //           <TableCell>Description</TableCell>
        //           <TableCell>Calories</TableCell>
        //           <TableCell>Protein (g)</TableCell>
        //           <TableCell>Carbs (g)</TableCell>
        //           <TableCell>Fat (g)</TableCell>
        //           <TableCell></TableCell>
        //           <TableCell></TableCell>
        //         </TableRow>
        //       </TableHead>
        //       <TableBody>
        //         {this.props.food.map((food) => {
        //           return (
        //             <FoodItem key={food.id} food={food} deleteFood={this.deleteFood} dispatch={this.props.dispatch} />
        //           )
        //         })}
        //       </TableBody>
        //     </Table>
        //   </div>
        // )
    }
};

const mapStateToProps = state => ({
    workouts: state.workouts.workoutReducer
});

export default connect(mapStateToProps)(WorkoutPage);