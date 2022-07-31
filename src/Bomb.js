// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    decrement = setInterval(() => {
        const newSecondLeft = this.state.secondsLeft - 1;
        this.setState({secondsLeft: newSecondLeft});
    }, 1000);

    render(){
        return (
            (this.state.secondsLeft>0)?
            (<h2>{this.state.secondsLeft} seconds left before I go boom!</h2>):
            (<h1>Boom!</h1>)
        )
    }
}
export default Bomb;