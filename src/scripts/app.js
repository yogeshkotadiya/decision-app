const app = {
    title: 'React App',
    subtitle: 'React Training App to learn react',
    options:[]
};

// Insert new Option to list
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);           //Push new option from input field to options object.
        e.target.elements.option.value = '';
        renderOptions();
    }
};

//Clear all Options
const clearOptions = (e) => {
    app.options = [];
    renderOptions();
};

//Genrate Random option form array

const onGenrateOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};

//Render window function
const renderOptions = () => {

    let template = (
        <div>
            <h2>{app.title}</h2>

            <h3>{app.subtitle}</h3>

            {(app.options && app.options.length > 0) ? <p>Here's your Options : </p> : <p>No Options</p> }

            <button disabled={app.options.length > 0 ? false : true } onClick={onGenrateOption}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            <ol>
                { app.options.map((e) => <li key={app.options.indexOf(e)}>{e}</li>)}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit"> Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('container'));
};

renderOptions();