import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';
import AddFood from '../AddFood/AddFood';
import ProgressBar from '../ProgressBar/ProgressBar';
import FoodItem from '../FoodItem/FoodItem';
import { Add as AddIcon, Settings as SettingsIcon } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import NutritionSettings from '../NutritionSettings/NutritionSettings'
import { TableRow } from '@material-ui/core';
// import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" + new Date().getFullYear();

class NutritionPage extends Component {

  state = {
    date: date,
    showAddFood: false,
    showSettings: false,
  }

  componentDidMount() {
    console.log('nutrition page mounted!', this.props.calorieTotal)
    this.props.dispatch({
      type: 'FETCH_GOALS',
      // payload: date
    })
    this.props.dispatch({ type: 'FETCH_FOOD' })
    this.props.dispatch({ type: 'FETCH_TOTALS' })
    console.log('NutritionPage mounted!')
  }

  deleteFood = (id) => {
    this.props.dispatch({ type: 'DELETE_FOOD', payload: id })
    }
  

  showForm = (property) => {
    
      if (property === 'showAddFood'){
        this.setState({
          [property]: !this.state.showAddFood
        })
        console.log(this.state.showAddFood)
      } else if (property === 'showSettings') {
        this.setState({
          [property]: !this.state.showSettings
        })
        console.log(this.state.showSettings)
      }
     
      // case 'showEditFood':
      //   this.setState({
      //     [property]: !this.state.showEditFood
      //   })
      //   console.log(this.state.showEditFood)
    }


  // showForm = (property) => {
  //   switch (property) {
  //     case 'showAddFood':
  //       this.setState({
  //         showAddFood: !this.state.showAddFood
  //       })
  //       console.log(this.state.showAddFood)
  //     case 'showEditFood':
  //       this.setState({
  //         [property]: !this.state.showEditFood
  //       })
  //   }
  // }

  render() {
    return (
      <div className="nutritionPage">
        <div className="dataChart">
          <p>Today</p>
          <ProgressBar
            name="Calories"
            unit=""
            goal={this.props.calorieGoal}
            total={this.props.calorieTotal}
          />
          <ProgressBar
            name="Protein"
            unit="g"
            goal={this.props.proteinGoal}
            total={this.props.proteinTotal}
          />
          <ProgressBar
            name="Carbs"
            unit="g"
            goal={this.props.carbsGoal}
            total={this.props.carbsTotal}
          />
          <ProgressBar
            name="Fat"
            unit="g"
            goal={this.props.fatGoal}
            total={this.props.fatTotal}
          />
          <button onClick={() => this.showForm('showAddFood')}><AddIcon /></button>
          <button onClick={() => this.showForm('showSettings')}><SettingsIcon /></button>
        </div>

        <div>
          {this.state.showAddFood === true ? (<AddFood date={this.state.date} showForm={this.showForm}/>) : null}
        </div>

        <div>
          {this.state.showSettings === true ? (<NutritionSettings showForm={this.showForm}/>) : null}
        </div>

        <Table>
          <TableHead>
            <TableRow>

          
            <TableCell>Description</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Protein</TableCell>
            <TableCell>Carbs</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.props.food.map((food) => {
            return (
              // <TableRow key={food.id}>
              //   <TableCell>{food.description}</TableCell>
              //   <TableCell>{food.calories}</TableCell>
              //   <TableCell>{food.protein}</TableCell>
              //   <TableCell>{food.carbs}</TableCell>
              //   <TableCell>{food.fat}</TableCell>
              //   <TableCell><button onClick={() => this.showForm('showEditFood')}><EditIcon /></button></TableCell>
              //   <TableCell><button onClick={() => this.edit('delete', food.id)}><DeleteIcon /></button></TableCell>
                
        
              // <div key={food.id} >
                <FoodItem key={food.id} food={food} deleteFood={this.deleteFood} dispatch={this.props.dispatch}/>
              // </div>
              // </TableRow>
            )
          })}
          </TableBody>
        </Table>
        <div>
      
         
        </div>

      </div>
    )
  }
};

const mapStateToProps = state => ({
  nutrition: state.nutrition,
  calorieGoal: state.nutrition.goalsReducer.calorieGoal,
  calorieTotal: state.nutrition.totalsReducer.calorieTotal,
  proteinGoal: state.nutrition.goalsReducer.proteinGoal,
  proteinTotal: state.nutrition.totalsReducer.proteinTotal,
  carbsGoal: state.nutrition.goalsReducer.carbsGoal,
  carbsTotal: state.nutrition.totalsReducer.carbsTotal,
  fatGoal: state.nutrition.goalsReducer.fatGoal,
  fatTotal: state.nutrition.totalsReducer.fatTotal,
  food: state.nutrition.foodReducer
});

export default connect(mapStateToProps)(NutritionPage);
