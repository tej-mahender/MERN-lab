import React, {Component} from 'react';
import "../../App.css";

class Stateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello World !!, from Stateful Component'
        };
    }
        render() {
            return <h1>{this.state.message}</h1>;
        }
}
export default Stateful;