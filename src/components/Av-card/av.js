import { Component } from "react";

import './av.css'

import Card from "../Card/card";

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

class Avurvedic extends Component{
    render(){
        return(
            <div className="ayur-card1">
                <div className="text-card">
                <h1 className="head">Our Ayurvedic approach</h1>
                <p>
                At Amrutam we follow a unique and personalized approach to healing. <br/> Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s <br/> body type, medical history, and current health conditions.
                </p>
                </div>
                <div className="imgcard">
                    <img className="imgCardimg" src={img1} alt="img"/>
                    <img className="imgCardimg"  src={img2} alt="img"/>
                    <img className="imgCardimg"  src={img3} alt="img"/>
                    <img className="imgCardimg"  src={img4} alt="img"/>
                
                </div>
                <div className="card">
                    <Card/>
                </div>
                
            </div>
        )
    }
}

export default Avurvedic