import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
import AddFood from '../AddFood/AddFood';
import ProgressBar from '../ProgressBar/ProgressBar';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" +new Date().getFullYear();

class NutritionPage extends Component {

  state = {
    date: date,
    showAddFood: false
  } 

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_NUTRITION',
      payload: date
    })
    console.log('NutritionPage mounted!', )
  }

  handleClick = () => {
    this.setState({
      showAddFood: !this.state.showAddFood
    })
  }

  // calorieTotal = this.props.nutrition.calorie_total / this.props.nutrition.calorie_goal * 200;
  // proteinTotal = this.props.nutrition.protein_total / this.props.nutrition.protein_goal * 200;
  // carbsTotal = this.props.nutrition.carbs_total / this.props.nutrition.carbs_goal * 200;
  // fatTotal = this.props.nutrition.fat_total / this.props.nutrition.fat_goal * 200;
  
  render() {
    return (
      <div className="nutritionPage">
        <div className="dataChart">
        <p>{new Date().getMonth() + 1}/{new Date().getDate()}/{new Date().getFullYear()}</p>
        <ProgressBar name="Calories" progress={this.props.nutrition.calorie_total / this.props.nutrition.calorie_goal * 200} />
        <ProgressBar name="Protein" progress={this.props.nutrition.protein_total / this.props.nutrition.protein_goal * 200} />
        <ProgressBar name="Carbs" progress={this.props.nutrition.carbs_total / this.props.nutrition.carbs_goal * 200} />
        <ProgressBar name="Fat" progress={this.props.nutrition.fat_total / this.props.nutrition.fat_goal * 200} />
          {/* <h3>Calories</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.calorie_total / this.props.nutrition.calorie_goal * 200 }}>
            </div>
          </div>
          <h3>Protein</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.protein_total / this.props.nutrition.protein_goal * 200 }}>
            </div>
          </div>
          <h3>Carbs</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.carbs_total / this.props.nutrition.carbs_goal * 200 }}>
            </div>
          </div>
          <h3>Fat</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.fat_total / this.props.nutrition.fat_goal * 200 }}>
            </div>
          </div> */}
        </div>
       <button onClick={this.handleClick}>Add Food</button>
       <div>
         {this.state.showAddFood === true ? (<AddFood date={this.state.date} />) : null}
       </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  nutrition: state.nutrition
});

export default connect(mapStateToProps)(NutritionPage);
