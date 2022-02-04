import React, { Component } from 'react'
import Content from './content';

export class index extends Component {

    constructor(props) {
        super(props);
        this.state = { name : "Index Pages"  , number : 1};
    }


    /*

    shouldComponentUpdate // เรียกเมื่อ props or state เปลี่ยน

    componentDidMount //เรียกหลัง render เสร็จ
    componentDidUpdate // ไม่ถูกเรียกตอนครั้งแรกที่ render

    */


    // componentDidMount = () => {
    //     console.log("index Component")
    // }

    actionNameSetState = () => {
        //rerender 
        //console.log(`actionNameSetState start !`)
        this.setState({name : "Index Screen"})
    }

    actionSetNameValue = () =>{
        //no rerender 
        //console.log(`actionSetNameValue start !`)
        // eslint-disable-next-line
        this.state.name = "Index Test Value"
    }

    actionNumberPluss = () =>{
        this.setState({number : this.state.number + 1})
    }

    render() {
        console.log("rerender index component !")
        return (
            <div>
                Name = {this.state.name} <br />
                <button onClick={() => this.actionNameSetState()} >actionSetName ( setState )</button> <br />
                <button onClick={() => this.actionSetNameValue()} >actionSetNameValue ( setValue )</button> <br />
                <button onClick={() => this.actionNumberPluss()} >actionNumberPluss</button> <br />

                <div style={{paddingBottom : "4%"}}></div>
                <Content number={this.state.number} />
            </div>
        )
    }
}

export default index
