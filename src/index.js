import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    state = {num: 0};

    // increment = () => {
    //     this.setState({num: this.state.num + 1});
    // }

    // decrement = () => {
    //     this.setState({num: this.state.num - 1});
    // }

    incrementOrDecrement = (incVal) => {
        this.setState({num: this.state.num + incVal});
    }

    render() {
        return (<div className="container">
            <h1 className="alert alert-info">ReactJS Counter Application</h1>

            <h3>Value of num is {this.state.num}</h3>
            <button className="btn btn-primary" 
                onClick={ ()=>this.incrementOrDecrement(1) }>
                Increment
            </button>
            <button className="btn btn-primary" onClick={()=>this.incrementOrDecrement(-1)}>
                Decrement
            </button>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));