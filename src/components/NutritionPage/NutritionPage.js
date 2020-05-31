import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';
import AddFood from '../AddFood/AddFood';
import ProgressBar from '../ProgressBar/ProgressBar';
// import TextField from '@material-ui/core/TextField';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" + new Date().getFullYear();

class NutritionPage extends Component {

  state = {
    date: date,
    showAddFood: false,
  }

  componentDidMount() {
    console.log('nutrition page mounted!', this.props.calorieGoal)
    this.props.dispatch({
      type: 'FETCH_NUTRITION',
      payload: date
    })
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
          <ProgressBar name="Calories"
            unit=""
            goal={this.props.calorieGoal}
            total={this.props.calorieTotal} 
          />
           <ProgressBar name="Protein"
            unit="g"
            goal={this.props.proteinGoal}
            total={this.props.proteinTotal} 
          />
           <ProgressBar name="Carbs"
            unit="g"
            goal={this.props.carbsGoal}
            total={this.props.carbsTotal} 
          />
           <ProgressBar name="Fat"
            unit="g"
            goal={this.props.fatGoal}
            total={this.props.fatTotal} 
          />
        </div>
        <button onClick={this.handleClick}>Add Food</button>
        <div>
          {this.state.showAddFood === true ? (<AddFood date={this.state.date} />) : null}
        </div>

        <div>

        </div>

      </div>
    )
  }
};

const mapStateToProps = state => ({
  nutrition: state.nutrition,
  calorieGoal: state.nutrition.calorie_goal,
  calorieTotal: state.nutrition.calorie_total,
  proteinGoal: state.nutrition.protein_goal,
  proteinTotal: state.nutrition.protein_total,
  carbsGoal: state.nutrition.carbs_goal,
  carbsTotal: state.nutrition.carbs_total,
  fatGoal: state.nutrition.fat_goal,
  fatTotal: state.nutrition.fat_total,
});

export default connect(mapStateToProps)(NutritionPage);
