import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component } from "react";



class UnmountingPhase extends Component{
    constructor(){
        super()
        this.state={
            isVisible:true
        }
    }
    handleClick=()=>{
        this.setState(
            {
                isVisible:!this.state.isVisible
            }
        )

        
    }
    
    render(){
        return(
            <>
            <h3>unmountinphase </h3>
            {
                this.state.isVisible
                ?
                <Child/>
                :
                <h3>no child</h3>
            }
            <button onClick={this.handleClick}>click to see child</button>
            </>
        )
    }
}
export default UnmountingPhase


class Child extends Component{

    componentWillUnmount(){
        alert("Child is removed")
    }
    render(){
        return(
            <>
            <h3>child</h3>
            </>
        )
    }
}