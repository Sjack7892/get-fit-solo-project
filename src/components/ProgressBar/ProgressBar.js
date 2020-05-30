import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => (
    <div>
        <h3>{props.name}</h3>
        <div className="progressBar">
            <div className="progressDone" style={{ width: props.progress }}>
            </div>
        </div>
    </div>
);

export default ProgressBar;