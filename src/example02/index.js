import React, { Component } from 'react'

export class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { show : true };
    }

    actionUser = () =>{
        this.setState({show : false})
    }

    render() {
        console.log("rerender Index component !")
        return (
            <div>
                {
                    this.state.show ? <User /> : "" 
                }
                <br />
                <button onClick={() => this.actionUser()}>hide component user</button>
            </div>
        )
    }
}


class User extends Component {

    componentWillUnmount = () =>{
        console.log("componentWillUnmount !")
    }

    render() {
        console.log("rerender User component !")
        return (
            <div>
                User component
            </div>
        )
    }
}

export default Index
