import { Component } from "react";




class UpdatePhase extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleClick1=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleClick2=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState)
    }
    componentDidUpdate(){
        document.title=`sai ${this.state.count}`
    }
    render(){
        return(
            <>
            <h2>updating phase</h2>
            <h3> {this.state.count}</h3>
            <button onClick={this.handleClick1}>Increement</button>
            <button onClick={this.handleClick2}>Decreement</button>
            </>
        )
    }
}
export default UpdatePhase