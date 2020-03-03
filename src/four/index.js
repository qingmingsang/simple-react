import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        //debugger;
    }

    componentWillUpdate() {
        //debugger;
        console.log('update');
    }

    componentWillMount() {
        //debugger;
        console.log('mount');
    }

    onClick() {
        //debugger;
        this.setState({ num: this.state.num + 1 });
    }

    render() {
        //debugger;
        return (
            <div onClick={() => this.onClick()}>
                <h1>number: {this.state.num}</h1>
                <button>add</button>
            </div>
        );
    }
}
//debugger;
ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);