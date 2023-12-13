import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./cr 3.avif"
import image2 from "./cr1.avif"
import image3 from "./cr4.avif"
import image4 from "./lake.jpg"

class ChangeCarousel extends Component {
    set={
        date:[]
    }
    change=[{
        img:image4,
        name:"lake"
    }]
    handleClick=()=>{
        let result=this.change.filter(element=>
            element.name=="lake")
            this.setState({
                date:result
            })
    }
    render() {
        return (
            <div  className='one'>  
            <Carousel
            width={"60%"}
            >
                <div>
                    <img src={image1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <button onClick={this.handleClick}>changing image</button>
            </div>
        );
    }
};
export default ChangeCarousel