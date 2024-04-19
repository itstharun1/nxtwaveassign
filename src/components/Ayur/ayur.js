import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './ayur.css'

import ayurimg from './ayurimg.png'

const Ayur = () => {
  var settings = {
    dots: true,
    infinite:false,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    initialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                infinite:true,
                dots:true
            }
        },{
            breakpoint:480,
            settings:{
                slidesToScroll:1,
                slidesToShow:1,
            }
        }
    ]
  }
  return (
    <div className='avcard'>
        <h3 className='head'>Meet our Ayurveda experts</h3>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={ayurimg} alt='img'/>
        </div>
        <div >
        <img src={ayurimg} alt='img'/>
        </div>
        <div >
        <img src={ayurimg} alt='img'/>
        </div>
        
      </Slider>
        </div>  
        <button className='btn'>Find More Experts</button>
        
    </div>
  )
}

export default Ayur