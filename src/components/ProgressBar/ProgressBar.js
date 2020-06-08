import React from 'react';
import './ProgressBar.css';


function ProgressBar(props) {
    const total = props.total;
    const goal = props.goal;
    let progressBarTotal;
    if (isNaN(total / goal * 400)) {
        progressBarTotal = 0;
    } else {
        progressBarTotal = total / goal * 400;
    }   
    const unit = props.unit;

    return (
        <div className="progress">
            <h5 className="progressTitle">{props.name}</h5>
            <div>
            <p className="progressTotal">Total: {total}{unit}</p>
            <p className="progressGoal">Goal: {goal}{unit}</p>
            <p className="progressLeft">Left: {goal - total}{unit}</p>
            </div>
            <div className="progressBar">
                {(total === 0) ? <div className="progressDone" style={{ width: 0 }}></div> : total >= goal ? <div className="progressFull"></div> :
                    <div className="progressDone" style={{ width: progressBarTotal }}></div>}
            </div>
        </div>
    )
};

export default ProgressBar;