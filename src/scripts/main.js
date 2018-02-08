class DecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.removeOptionsAll = this.removeOptionsAll.bind(this);
        this.removeOption     = this.removeOption.bind(this);
        this.addOption        = this.addOption.bind(this);
        this.takeAction       = this.takeAction.bind(this);
        this.state = {
            options : []
        }
    }

    takeAction(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    removeOptionsAll(){
        this.setState( () => ({ options : [] }));
    }

    removeOption(optionToRemove){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    addOption(option){
        if(!option){
            return 'Enter the Valid option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Option is already exists!';
        }
        this.setState((prevState) => ({options : prevState.options.concat(option) }));
}

    render(){
        const title = 'Decision App';
        const subtitile = 'Let the computer take the decision for you.';
        return (
            <div>
                <Header  title            = {title}
                         subtitle         = {subtitile} />
                <Action  hasOptions       = {this.state.options.length > 0 }
                         takeAction       = {this.takeAction} />
                <Options options          = {this.state.options}
                         removeOption     = {this.removeOption}
                         removeOptionsAll = {this.removeOptionsAll}/>
                <Form    addOption        = {this.addOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1>
                <p>{props.subtitile}</p>
            </div>
    );
};

const Action = (props) =>{
    return (
            <div>
                 <button onClick={props.takeAction} disabled={!props.hasOptions} >Take the Decision for me</button>
            </div>
    );
};

const Options = (props) => {
    return (
            <div>
                <p>Here are your options : </p>
                <button onClick={props.removeOptionsAll} >Remove All</button>
                { props.options.map((e) => <Option removeOption = {props.removeOption} key={e} optionText={e}/> ) }
            </div>
    );
};

const Option = (props) => {
    return (
            <div>
                {props.optionText}
                <button onClick={(e) => {
                        props.removeOption(props.optionText);
                    } }
                >Remove</button>
            </div>
    );
};

class Form extends React.Component {

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

ReactDOM.render(<DecisionApp />, document.getElementById('container'));