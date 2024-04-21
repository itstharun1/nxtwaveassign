import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './av.css'

import cs1 from './cs1.png'
import cs2 from './cs2.png'
import cs3 from './cs3.png'

const AvCard = () => {
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
        <h3 className='head'>STORIES FROM OUR VALUED CUSTOMERS!</h3>
        <div className="slider-container div1">
      <Slider {...settings}>
        <div>
          <img className='avImg' src={cs1} alt='img'/>
        </div>
        <div>
        <img className='avImg' src={cs2} alt='img'/>
        </div>
        <div>
        <img className='avImg' src={cs3} alt='img'/>
        </div>
        
      </Slider>
        </div>
        
    </div>
  )
}

export default AvCard