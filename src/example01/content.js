import React, { Component } from 'react'

export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    // componentDidMount = () => {
    //     console.log("content Component")
    // }

    componentDidUpdate(prevProps){
        /*
            ไม่ถูกเรียกตอนครั้งแรกที่ render
        */
        console.log(`componentDidUpdate !`)
    }

    shouldComponentUpdate(prevProps){
        
        /*
        จะ render ป่าวถ้า props ที่เลือกเปลี่ยน
        ถ้า render = true | no render = false
        */
        console.log(`shouldComponentUpdate !`)
        return true
    }


    render() {
        console.log("rerender content component !")
        return (
            <div>
               content pages | number = {this.props.number} <br/>
            </div>
        )
    }
}

export default Content
