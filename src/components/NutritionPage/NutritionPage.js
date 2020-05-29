import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" +new Date().getFullYear();

class NutritionPage extends Component {

  state = {
    date: date
  }


  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_NUTRITION',
      payload: date
    })
    console.log(date);
  }

  // onChange = date => {
  //   console.log(this.state.date)
  //   this.props.dispatch({
  //     type: 'FETCH_NUTRITION',
  //     payload: date
  //   })
  //   console.log(this.state.date)
  // }
  
  render() {
    return (
      <div className="nutritionPage">
        <div className="dataChart">
        <p>{new Date().getMonth() + 1}/{new Date().getDate()}/{new Date().getFullYear()}</p>
        {/* <form  noValidate> */}
      {/* <TextField
        id="date"
        label="Date"
        type="date"
        onChange={this.onChange}
        // value={this.state.date}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
    {/* </form> */}
        {/* <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        /> */}
        {/* <p>{this.state.date}</p> */}
          <h3>Calories</h3>
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
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  nutrition: state.nutrition,
});

export default connect(mapStateToProps)(NutritionPage);
