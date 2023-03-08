import { Element } from 'react-scroll';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import Apip from '../Assets/Images/Apip.png'

const sectionAbout = () => {
    return (
        <>
            <Element name='about'>
                <div className="contAbout">
                    <div className="about">
                        <h1 className='titleAbout'>About Me ?</h1>
                        <p className='paragraphAbout'>You want to know about me? No, you should know me from the project that I make, just keep scrolling...</p>
                    </div>
                    <div className="myPicture">
                        <Parallax speed={10} className="outline1">
                            <span></span>
                        </Parallax>
                        <Parallax speed={50} className='Apip'>
                            <img src={Apip} alt="Apipict" />
                        </Parallax>
                        <Parallax speed={10}  className="outline2">
                            <span></span>
                        </Parallax>
                    </div>
                </div>
            </Element>
        </>
    )
}

export default sectionAbout