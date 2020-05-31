import React from 'react';
import './ProgressBar.css';


function ProgressBar(props) {
    const total = props.total;
    const goal = props.goal;
    console.log( goal, total / 200 * goal)

    // if ( isNaN(total)) {
    //     progressBar = <div className="progressDone" style={{ width: 0 }}></div>
    // } else if (total >= goal) {
    //     progressBar = <div className="progressDone" style={{ width: props.total, color: 'red'}}></div>
    // } else {
    //     progressBar = <div className="progressDone" style={{ width: props.total}}></div>
    // }

    // if(total / 200 * goal >= goal) {
    //     return (
    //         <div className="progressDone" style={{ color: 'red'}}></div>
    //     )
    // } else if(isNaN(total)) {
    //     return (
    //         <div className="progressDone" style={{ width: 0, }}></div>
    //     )
    // } else {
    //     return (
    //         <div className="progressDone" style={{ width: props.total}}></div>
    //     )
    // }

    return(
        <div>
        <h3>{props.name}</h3>
        <div className="progressBar">
            {isNaN(total) ? <div className="progressDone" style={{ width: 0 }}></div> : total / 200 * goal >= goal ? <div className="progressFull"></div> :
            <div className="progressDone" style={{ width: props.total, backgroundColor: props.color}}></div>}
            {/* {total / 200 * goal >= goal && <div className="progressFull"></div>}} */}
            {/* {total => goal && <div className="progressDone" style={{ width: props.total, color: 'red'}}></div>} */}
            {/* <div className="progressDone" style={{ width: isNaN(props.total) ? 0 : props.total }}>
                
                <div className="progressFull"></div>
            </div> */}
        </div>
    </div>
    )
  
};

export default ProgressBar;