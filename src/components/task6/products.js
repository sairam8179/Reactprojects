import axios from "axios";
import { Component } from "react";
import Picture from "./cards";
import Cards from "./cards";



class Products extends Component{
    state={
        products:[]
    }
    handleclick=()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(result=>console.log(result))
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{

            this.setState(
                {
                    products:response.data
                }
            )









            // if(response.status===200){
            //     alert ("success")
            // }
            // else{
            //     alert("something went wrong")
            // }
        }
            
    )}



    render(){
        console.log(this.state.products)
        return(
            <div> 
                <h3>Products Lists</h3>
                <button onClick={this.handleclick}>Click</button>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {
                    this.state.products.length>0 && this.state.products.map((element)=>{
                        return(
                            <>
                            <Cards image={element.image}
                            title={element.title}
                            description={element.description}
                            category={element.category} />
                            </>

                    
                            
                            
                        )
                    })
                    
                    
                }
                </div>

            </div>
        )
    }
}
export default Products