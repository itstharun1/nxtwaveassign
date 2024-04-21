import './footer.css'
import text from './text.png'
import text2 from './text2.png'

const Footer=()=>{
    return(
        <div className='footerdiv'>
            <div className="footer-card1">
                <img className='img' src={text} alt='text'/>
            </div>
            <div className="footer-card2">
                <img className='img2' src={text2} alt='text'/>
            </div>
        </div>
    )
}

export default Footer