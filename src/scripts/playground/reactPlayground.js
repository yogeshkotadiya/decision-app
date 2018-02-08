const app = {
    title: 'React App',
    subtitle: 'React Training App to learn react',
    option:['One ','Two ', 'Three']
};
let template = (
    <div>
        <h2>{app.title}</h2>

        <h3>{app.subtitle}</h3>

        {(app.option && app.option.length > 0) ? <p>Here's your Options : {app.option}</p> : <p>No Options</p> }
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
        </ul>
    </div>
);

ReactDOM.render(template, document.getElementById('container'));

const user = {
    name: 'Yogesh',
    job: 'Web Developer',
    city: 'Mumbai'
};

const getUser = (e) => {
    if(e === undefined){
        return "Unknown";
    }
    return e;
};

let templateTwo = (
    <div>
        <h1>Name : {getUser(user.name)}</h1>
        <p>Job : {getUser(user.job)}</p>
        <p>City : {getUser(user.city)}</p>
        <p>Skills</p>
        <ul>
            <li>HTMl,CSS,JS</li>
            <li>Sass,Node,React</li>
        </ul>
    </div>
);

ReactDOM.render(templateTwo, document.getElementById('containerTwo'));

const multiply = {
    numbers: [1, 2, 4],
    multiplyBy(arg){ return this.numbers.map((e) =>  e*arg) }
};

console.log(multiply.multiplyBy(3));

// Third Template

let count= 0;

const addOne = () => { count++; renderTemplateThree();};
const minusOne = () => { count--; renderTemplateThree();};
const reset = () => { count=0; renderTemplateThree();};

function renderTemplateThree(){

    let templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateThree, document.getElementById('container'));
}

renderTemplateThree();