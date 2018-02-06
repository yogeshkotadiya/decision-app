'use strict';

var app = {
    title: 'React App',
    subtitle: 'React Training App to learn react',
    options: []
};

// Insert new Option to list
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option); //Push new option from input field to options object.
        e.target.elements.option.value = '';
        renderOptions();
    }
};

//Clear all Options
var clearOptions = function clearOptions(e) {
    app.options = [];
    renderOptions();
};

//Genrate Random option form array

var onGenrateOption = function onGenrateOption() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};

//Render window function
var renderOptions = function renderOptions() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            app.title
        ),
        React.createElement(
            'h3',
            null,
            app.subtitle
        ),
        app.options && app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here\'s your Options : '
        ) : React.createElement(
            'p',
            null,
            'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length > 0 ? false : true, onClick: onGenrateOption },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (e) {
                return React.createElement(
                    'li',
                    { key: app.options.indexOf(e) },
                    e
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                ' Add'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('container'));
};

renderOptions();
