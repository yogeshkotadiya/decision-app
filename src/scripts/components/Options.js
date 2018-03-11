import React from 'react';
import Option from './Option';

const Options = props => (
    <div className="options" >
        <div className="options__header" >
            <span>Here are your options </span>
            <button className="button__removeAll" onClick={props.removeOptionsAll} >Remove All</button>
        </div>
        <div>
            <ol className="options__items" >
                { props.options.map(e =>
                    <Option removeOption={props.removeOption} key={e} optionText={e} />)
                }
            </ol>
        </div>
    </div>
);

export default Options;
