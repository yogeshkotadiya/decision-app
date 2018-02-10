import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
            <div>
                <p>Here are your options : </p>
                <button onClick={props.removeOptionsAll} >Remove All</button>
                { props.options.map((e) => <Option removeOption = {props.removeOption} key={e} optionText={e}/> ) }
            </div>
    );
};

export default Options;