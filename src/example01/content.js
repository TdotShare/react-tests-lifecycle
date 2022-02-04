import React, { Component } from 'react'

export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount = () => {
    //     console.log("content Component")
    // }

    componentDidUpdate(prevProps) {
        /*
            ไม่ถูกเรียกตอนครั้งแรกที่ render
            และหาก shouldComponentUpdate retrue false จะไม่ทำงาน
        */
        console.log(`componentDidUpdate !`)
    }

    shouldComponentUpdate(prevProps) {

        /*
        จะ rerender ป่าวถ้า state หรือ props ที่เลือกเปลี่ยน
        ถ้า rerender = true | no rerender = false
        */
        //console.log(`shouldComponentUpdate !`)
        //console.log(` prevProps => ${prevProps.number}`)
        //console.log(` Pros => ${this.props.number}`)

        // if (prevProps.number === this.props.number) {
        //     return false
        // } else {
        //     return true
        // }

        return false
    }


    render() {
        console.log("rerender content component !")
        return (
            <div>
                content pages | number = {this.props.number} <br />
            </div>
        )
    }
}

export default Content
