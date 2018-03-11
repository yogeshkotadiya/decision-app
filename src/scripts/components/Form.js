import React from 'react';

export default class Form extends React.Component {

    state = {
        error : undefined
    }
    addOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error  = this.props.addOption(option);        //Push new option from input field to options object.
        e.target.elements.option.value = '';
        this.setState(()=> ({ error }));
    }

    render(){
        return (
            <div>
                {this.state.error && <p id="error-message">{this.state.error}</p> }
                <form onSubmit={this.addOption}>
                    <input className="form-input" type="text" name='option' placeholder="Add your options here"/>
                    <button className="button__addOption" type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}