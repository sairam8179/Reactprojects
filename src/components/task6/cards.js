import { Component } from "react";



class Cards extends Component{
    render(){
        return(
            <>
                <div className="card m-2" style={{ display:"flex" , width: "calc(25% - 16px)" }}>
                <img
                  src={this.props.image}
                  height={200}
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <p className="card-text">
                   {this.props.description}
                  </p>
                  <p className="card-text">
                   {this.props.category}
                  </p>
                  <a href="#" className="btn btn-primary">
                    See More
                  </a>
                </div>
              </div>
            </>
        )
    }
}
export default Cards