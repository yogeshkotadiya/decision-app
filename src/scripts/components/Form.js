import React from 'react';

export default class Form extends React.Component {

    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error : undefined
        };
    }

    addOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error  = this.props.addOption(option);        //Push new option from input field to options object.
        e.target.elements.option.value = '';
        this.setState(()=> ({ error }));
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.addOption}>
                    <input type="text" name='option'/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}