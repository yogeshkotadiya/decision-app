import React from 'react';

const Action = (props) =>(
            <div>
                 <button className="button button__action" onClick={props.takeAction} disabled={!props.hasOptions} >Take the Decision for me</button>
            </div>
    );

export default Action;