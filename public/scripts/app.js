'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionApp = function (_React$Component) {
    _inherits(DecisionApp, _React$Component);

    function DecisionApp(props) {
        _classCallCheck(this, DecisionApp);

        var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

        _this.removeOptionsAll = _this.removeOptionsAll.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.takeAction = _this.takeAction.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(DecisionApp, [{
        key: 'takeAction',
        value: function takeAction() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'removeOptionsAll',
        value: function removeOptionsAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Enter the Valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This Option is already exists!';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Decision App';
            var subtitile = 'Let the computer take the decision for you.';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title,
                    subtitle: subtitile }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    takeAction: this.takeAction }),
                React.createElement(Options, { options: this.state.options,
                    removeOption: this.removeOption,
                    removeOptionsAll: this.removeOptionsAll }),
                React.createElement(Form, { addOption: this.addOption })
            );
        }
    }]);

    return DecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitile
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.takeAction, disabled: !props.hasOptions },
            'Take the Decision for me'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Here are your options : '
        ),
        React.createElement(
            'button',
            { onClick: props.removeOptionsAll },
            'Remove All'
        ),
        props.options.map(function (e) {
            return React.createElement(Option, { removeOption: props.removeOption, key: e, optionText: e });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.removeOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var Form = function (_React$Component2) {
    _inherits(Form, _React$Component2);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this2 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Form, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option); //Push new option from input field to options object.
            e.target.elements.option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return Form;
}(React.Component);

ReactDOM.render(React.createElement(DecisionApp, null), document.getElementById('container'));
