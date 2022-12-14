
import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }

     Newcar = (x) => {
        return <span>My New Brand {x}</span>
    }

    changeColor = () => {
        this.setState({ color: "blue"});
    } 

    render() {
        return <>
        <div>I am a Car! {this.state.color} {this.Newcar("wolks")}</div>
        <button onClick={this.changeColor}>Change Color</button>
        </>
    }
}

export default Car;