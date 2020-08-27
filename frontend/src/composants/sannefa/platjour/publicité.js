
import React from "react";
import  "./sannefa.css";
import  delice from "./delice.png"
import  mazraa from "./mazraa.png"
import nadhif from "./Nadhif.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import  "./sannefa.css";

const Advertsment = () => {
  return (
    <div classname="container" >
       <Carousel>
                <div>
                    <img src={nadhif} />
                   
                </div>
                <div>
                    <img src={mazraa} />
                   
                </div>
                <div>
                    <img src={delice}/>
                   
                </div>
            </Carousel>
   
  </div>
  );
}
export default Advertsment;