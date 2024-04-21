import { Component } from "react";

import play from './play.png'
import apple from './apple.png'
import tharun from './tharun.png'

import './mobile.css'

class Mobile extends Component{
    render(){
        return(
            <div className="mobile-card">
                <div className="card1">
                    <div className="sec">
                    <h2 className="para">Amrutam home App</h2>
                    <p>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                       
                   
                    <h2>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h2>
                      <h1>Get the App now</h1>
                  
                        <img className="btns" src={play} alt="img"/>
                        <img className="btns" src={apple} alt="img"/>
              
                 
                    </div>
                    <div>
                        <img className="img1" src={tharun} alt="img"/>
                    </div>
                </div>
                <div className="card2">
                    <div>
                    <h2 className="para">Amrutam home App</h2>
                    <p>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                    </div>
                    <div>
                    <img className="img1" src={tharun} alt="img"/>
                    </div>
                    <div>
                    <h2>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h2>
                      <h1>Get the App now</h1>
                  
                        <img src={play} alt="img"/>
                        <img src={apple} alt="img"/>
                    </div>

                </div>



            </div>
        )
    }
        
        
} 


export default Mobile