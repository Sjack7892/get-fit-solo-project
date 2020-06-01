import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';
import AddFood from '../AddFood/AddFood';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Add, Settings as SettingsIcon } from '@material-ui/icons/';

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

  handleClick = () => {
    this.setState({
      showAddFood: !this.state.showAddFood
    })
  }

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
          <button onClick={this.handleClick}><Add /></button>
          <button><SettingsIcon /></button>
        </div>

        <div>
          {this.state.showAddFood === true ? (<AddFood date={this.state.date} />) : null}
        </div>

        <div>
          {/* {this.state.showAddFood === true ? (<Settings date={this.state.date} />) : null} */}
        </div>

        <div>
          {this.props.food.map((item) => {
            return (
              <p>{item.description} {item.calories}</p>
            )
          })}
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
