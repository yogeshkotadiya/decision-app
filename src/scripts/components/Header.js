import React from 'react';

const Header = props => (
    <div className="header">
        <h1 className="header__title" >{props.title}</h1>
        <h3 className="header__subtitle" >{props.subtitle}</h3>
    </div>
);

export default Header;
