import React from 'react';
import './ProgressBar.css';


function ProgressBar(props) {
    const total = props.total;
    const goal = props.goal;
    const progressBarTotal = total / goal * 200;
    const unit = props.unit;

    return (
        <div>
            <h3>{props.name}</h3>
            <p>Total: {total}{unit} Goal: {goal}{unit} Left: {goal - total}{unit}</p>
            <div className="progressBar">
                {(total === 0) ? <div className="progressDone" style={{ width: 0 }}></div> : total >= goal ? <div className="progressFull"></div> :
                    <div className="progressDone" style={{ width: progressBarTotal }}></div>}
            </div>
        </div>
    )
};

export default ProgressBar;