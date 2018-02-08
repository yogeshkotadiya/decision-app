class Counter extends React.Component {

    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count : props.count
        };
    }

    addOne (){
     //   this.state.count++;
     //This will update count by +1 but will not reRednder the object in window, Use setState to render

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    minusOne(){
     //   this.state.count--;
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1
            }
        });
    }

    resetCounter(){
    //    this.state.count = 0;
        this.setState(()=>{
            return{
                count: 0    //You don't need prevstate because counter will set to 0 does't matter the state of a App
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.addOne} >+1</button>
                <button onClick={this.minusOne} >-1</button>
                <button onClick={this.resetCounter} >Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count : 0
};

ReactDOM.render(<Counter />, document.getElementById('containerTwo'));

//Visible Toggle About

class Visible extends React.Component{

    constructor(props){
        super(props);
        this.buttonToggle = this.buttonToggle.bind(this);
        this.state = {
            buttonState : false
        };
    }

    buttonToggle(){
        this.setState((prevState)=> {
            return{
                buttonState : !prevState.buttonState
            }
        });
    }

    render() {
     return (
        <div>
            <h1>Details</h1>

            <button onClick={this.buttonToggle}>{this.state.buttonState ? 'Hide Details': 'Show Details'}</button>
            { this.state.buttonState && (
                <div>
                    <p> Hello there!</p>
                </div>
            )}
        </div>
        );
    }
}
ReactDOM.render(<Visible />, document.getElementById('containerTwo'));