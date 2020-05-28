import React, { Component } from 'react';
import '../NutritionPage/NutritionPage.css';
import { connect } from 'react-redux';

class NutritionPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_NUTRITION'
    })
  }

  render() {
    return (
      <div className="nutritionPage">
        <div className="dataChart">
          <h3>Calories</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.calories/3000 * 200, backgroundColor: '#61dc38' }}>
            </div>
          </div>
          <h3>Protein</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.protein/165 * 200, backgroundColor: '#61dc38' }}>
            </div>
          </div>
          <h3>Carbs</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.carbs/290 * 200, backgroundColor: '#61dc38' }}>
            </div>
          </div>
          <h3>Fat</h3>
          <div className="progressBar">
            <div className="progressDone" style={{ width: this.props.nutrition.fat/54 * 200, backgroundColor: '#61dc38' }}>
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
