import { Component } from "react";
import './Body2.css'

import head from './head.png'
import hindi from './hindi.png'
import honey from './honey.png'
import men from './men.png'
import treat from './treat.png'
import women from './women.png'
import zero from './zero.png'


class Body2 extends Component{
    render(){
        return(
            <div>
                <div className="body-main">
                <div>
                    <h1 className="body-heading">What sets Ayurvedic consultations apart?</h1>
                    <div className="card-imgs">
                        <img src={hindi} className="card-img" alt="card"/>
                        <img src={women} className="card-img" alt="card"/>
                        <img src={head} className="card-img" alt="card"/>
                        <img src={zero} className="card-img" alt="card"/>
                        <img src={honey} className="card-img" alt="card"/>
                        <img src={treat} className="card-img" alt="card"/>
                        <img src={men} className="card-img" alt="card"/>
                    </div>
                </div>
            </div>

            <div className="c1">
            <div className="img-card-bottle">
                <h1 className="heading">Ready to restore harmony in <br/> your mind , body and spirit</h1>
                <button className="c-btn">Book a consultation</button>
            </div>
            </div>
            </div>
        )
    }
}

export default Body2