import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Form from './Form';
import OptionModal from './OptionModal';

export default class DecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption : undefined
    };

    takeAction = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption : option }));
    }

    closeModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    removeOptionsAll = () => {
        this.setState( () => ({ options : [] }));
    }

    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    addOption = (option) => {
        if(!option){
            return 'Enter the Valid option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Option is already exists!';
        }
        this.setState((prevState) => ({options : prevState.options.concat(option) }));
}

    render = () => {
        const title = 'Decision App';
        const subtitle = 'Let the computer take the decision for you.';
        return (
            <div>
                <Header  title            = {title}
                         subtitle         = {subtitle} />
                <div className="container">
                    <Action  hasOptions       = {this.state.options.length > 0 }
                             takeAction       = {this.takeAction} />
                    <Options options          = {this.state.options}
                             removeOption     = {this.removeOption}
                             removeOptionsAll = {this.removeOptionsAll}/>
                    <Form    addOption        = {this.addOption}/>
                    <OptionModal selectedOption = {this.state.selectedOption}
                            closeModal        = {this.closeModal}/>
                </div>
            </div>
        );
    }
}