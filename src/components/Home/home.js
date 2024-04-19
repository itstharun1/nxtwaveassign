

import Header from "../Header/header"
import AyurvedaCard from "../Body/body"
import Body2 from "../Body2/Body2"
import Avurvedic from "../Av-card/av"
import Avcard from "../AV/av"
import Ayur from "../Ayur/ayur"
import Mobile from "../Mobile/mobile"
import Footer from "../Footer/footer"


import './home.css'


const Home=()=>{
    return(
        <div>
            <Header/>
            <AyurvedaCard/>
            <Body2/>
            <Avurvedic/>
            <Avcard/>
            <Ayur/>
            <Mobile/>
            <Footer/>         
            
        </div>
    )
}

export default Home