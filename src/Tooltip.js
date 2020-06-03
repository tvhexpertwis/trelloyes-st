import React from 'react';

import './Tooltip.css';

function Tooltip(props) {
    console.log(props.counter);

    return (
        <div className='Tooltip'>
            <div className='Tooltip-content'>
                <p className="Tooltip-date margin-right">
                    {props.date}
                </p>
                <p className='Tooltip-username margin-right'>
                    {props.user}: 
                </p>
                <p className='Tooltip-message margin-right'>
                    {props.message}
                </p>
            </div>
        </div>
    )
}

export default Tooltip;