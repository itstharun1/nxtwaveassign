import { Component } from "react";

import './header.css'

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

class Header extends Component{
    render(){
        return(
            <div>
              
                
                <div className="head-card1">
                    <img src="https://cdn-icons-png.flaticon.com/512/9293/9293128.png" alt="nav" className="nav-img"/>
                    <div className="logo-div">
                          <h1 className="logo">AMRUTUM</h1>
                    </div>
                </div>
                <div className="bg-card">
                    <div className="main-card">
                    <h4 className="heading-1">Namaste, Welcome to Amrutam</h4>
                    <h2 className="heading-2">Step into Holistic Healing with Ayurveda Book Consultation with certified Experts</h2>
                    <p className="para-1">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    <button className="btn-1">Book an Appointment</button>
                    </div>
                </div>
                <div>
                    <div className="img-main">
                        <div>
                            <img className="imgt" alt="img" src={img1}/>
                        </div>
                        <div>
                            <img className="imgt" alt="img" src={img2}/>
                        </div>
                        <div>
                            <img className="imgt" alt="img" src={img3}/>
                        </div>
                        <div>
                            <img className="imgt" alt="img" src={img4}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Header