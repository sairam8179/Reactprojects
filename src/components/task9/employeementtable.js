const { Component } = require("react");


class Employee extends Component{
    
    state={
        

        data : []

    }

    developer=[{
        name:"venkat",
        id:1,
        designation:"react developer"

    }
,{
    name:"sai",
    id:2,
    designation:"java developer"

},{
    name:"madhu",
    id:3,
    designation:"react developer"

},{
    name:"ram",
    id:4,
    designation:"java developer"

},{
    name:"eswar ",
    id:5,
    designation:"angular developer"

},{
    name:"subbu",
    id:6,
    designation:"angular developer"

}
]
    handleClick1=()=>{
        let react=this.developer.filter(element=>
            element.designation =="react developer")
        this.setState({
            data:react
        })
    }
    handleClick2=()=>{
        let java=this.developer.filter(element=>
            element.designation=="java developer")
            this.setState({
                data:java
            })
    }
    handleClick3=()=>{
      let angular=this.developer.filter(element=>
        element.designation=="angular developer")
        this.setState({
          data:angular
        })
    }
    handleClick4=()=>{
      this.setState({
        data:this.developer
      })
    }
    render(){
        return(
            <>
            <h1>Developers</h1>
            <button onClick={this.handleClick1}>React Developer</button>
            <button onClick={this.handleClick2}>java Developer</button>
            <button onClick={this.handleClick3}>Angular Developer</button>
            <button onClick={this.handleClick4}>All</button>
            <div>
                <table style={{width:"100"}} className="table w-50">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(ele=>{
                                return(
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.designation}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
export default Employee