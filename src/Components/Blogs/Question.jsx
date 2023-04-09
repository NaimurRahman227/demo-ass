import React from 'react';

const Question = () => {
    return (
        <div>
            {/* first question */}
            <h2>1. What is the different between props and state ?</h2>
            <p>The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            <br />
            {/* Second question */}
            <h2>2. How to work useState ?</h2>
            <p>It can be used like this: const [state, setState] = useState(initialValue); Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component. The setState function can be used to update the state , triggering a re-render of your component.</p>
            <br />
            <h2>
3. what can useEffect do other than load data ?</h2>
            <p>Running on state change: validating input field.
Running on state change: live filtering.
Running on state change: trigger animation on new array value.
Running on props change: update paragraph list on fetched API data update</p>
<br />
            <h2>
            4. How does react work ?
            </h2>
            {/* done done done */}
            <p>
            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
            </p>
        </div>
    );
};

export default Question;