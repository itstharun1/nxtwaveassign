import { Component } from "react";
import './body.css'

import plus from './plus.png'
import muscle from './muscle.png'
import human from './human.png'
import cup from './cup.png'
import hands from './hands.png'
import love from './love.png'
import medi from './medi.png'

class AyurvedaCard extends Component{
    render(){
        return(
            <div>
                <div className="main-card-magic">
                    <h1 className="heading-magic">Discover Ayurveda's Magic With Us</h1>
                    <p className="para1">Ayurvedic treatment aims to balance your body and mind, <br/> bringing harmony and vitality. It's like a journey to better health using ancient wisdom,<br/> a totally effective approach for a better life.</p>
                </div>
                <div className="main-love-card">
                <div className="card11">
                    <div className="love-card t1">
                        <div className="c11">
                            <h5>Personalized Wellness</h5>
                            <p className="para1">Get treatments made just for you based on your individual doshas ( body type)</p>
                        </div>
                        <div className="c22">
                            <img className="love" src={love} alt="love"/>
                        </div>
                    </div>
                    <div className="love-card">
                        <div className="c11">
                            <h5>Focus on prevention</h5>
                            <p className="para1">Stop problems even before they start.</p>
                        </div>
                        <div className="c22">
                            <img className="love" src={hands} alt="love"/>
                        </div>
                    </div>
                    <div className="love-card t1">
                        <div className="c11">
                            <h5>Mind-Body Connection</h5>
                            <p className="para1">Keep your mind and body in sync for a happy life.</p>
                        </div>
                        <div className="c22">
                            <img className="love" src={human} alt="love"/>
                        </div>
                    </div>
                </div>
                <div className="card22">
                    <img className="medi-img" src={medi} alt="medi" />
                </div>
                <div className="card33">
                    <div className="love-card">
                        <div className="c22">
                            <img className="love" src={plus} alt="love"/>
                        </div>
                        <div className="c11">
                            <h5>Holistic Healing</h5>
                            <p className="para1">Fix the root problem for long-lasting health.</p>
                        </div>
                        
                    </div>
                    <div className="love-card t3">
                        <div className="c22">
                            <img className="love" src={cup} alt="love"/>
                        </div>
                        <div className="c11">
                            <h5>Natural Remedies</h5>
                            <p className="para1">Using herbs and natural therapies for healing.</p>
                        </div>
                        
                    </div>
                    <div className="love-card">
                        <div className="c22">
                            <img className="love" src={muscle} alt="love"/>
                        </div>
                        <div className="c11">
                            <h5>Boosting immunity</h5>
                            <p className="para1">Stay strong and healthy for life, not just for today.</p>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
                
            </div>
        )
    }
}

export default AyurvedaCard