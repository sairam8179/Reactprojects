import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./cr 3.avif"
import image2 from "./cr1.avif"
import image3 from "./cr4.avif"

class DemoCarousel extends Component {
    render() {
        return (
            <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
            <Carousel
            width={"50%"}
            dynamicHeight={"100%"}
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
            </div>
        );
    }
};
export default DemoCarousel