import React, { Component } from 'react';
import '../WorkoutPage/WorkoutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const date = moment()
.utcOffset('+05:30')
.format('YYYY-MM-DD hh:mm:ss a');

class WorkoutPage extends Component {



  render() {
    return (
      <div className="workoutPage">
        <p>{date}</p>
      <div className="dataChart">
        <h3>Calories</h3>
        <div className="progressBar">
          <div className="progressDone" style={{width: 45, backgroundColor: '#61dc38'}}>
          </div>
        </div>
        <h3>Protein</h3>
        <div className="progressBar">
          <div className="progressDone" style={{width: 78, backgroundColor: '#61dc38'}}>
          </div>
        </div>
        <h3>Carbs</h3>
        <div className="progressBar">
          <div className="progressDone" style={{width: 135, backgroundColor: '#61dc38'}}>
          </div>
        </div>
        <h3>Fat</h3>
        <div className="progressBar">
          <div className="progressDone" style={{width: 40, backgroundColor: '#61dc38'}}>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

;

export default WorkoutPage;
