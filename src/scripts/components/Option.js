import React from 'react';

const Option = props => (
    <div className="item__list">
        <li>{props.optionText}
            <button
                className="item__list--btn"
                onClick={(e) => {
                props.removeOption(props.optionText);
            }}
            >Remove
            </button>
        </li>
    </div>
);

export default Option;
