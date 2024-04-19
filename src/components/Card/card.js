import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './card.css'

import img1 from '../Av-card/img1.png'
import img2 from '../Av-card/img2.png'

import img3 from '../Av-card/img3.png'

import img4 from '../Av-card/img4.png'



const Card = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt='img'/>
        </div>
        <div>
        <img src={img2} alt='img'/>
        </div>
        <div>
        <img src={img3} alt='img'/>
        </div>
        <div>
        <img src={img4} alt='img'/>
        </div>
        
      </Slider>
    </div>
  )
}

export default Card