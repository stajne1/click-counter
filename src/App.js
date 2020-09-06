import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    resetHandler = () => {
        this.setState({ count: 0 });
    }

    render() {
        const { count } = this.state;
        return (
            <div className="App">
                <h1 className="counterText">{count}</h1>
                <button className="button clickButton" onClick={this.clickHandler}>Click Me!</button>
                <button className={`button resetButton ${!count && 'disabled'}`} onClick={this.resetHandler}>Reset Counter</button>
            </div>
        );
    }
}

export default App;