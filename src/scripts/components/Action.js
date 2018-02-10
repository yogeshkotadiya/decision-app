import React from 'react';

const Action = (props) =>{
    return (
            <div>
                 <button onClick={props.takeAction} disabled={!props.hasOptions} >Take the Decision for me</button>
            </div>
    );
};

export default Action;