import Wave2 from '../Assets/Images/Wave2.png'
import Wave1 from '../Assets/Images/Wave1.png'
import Apip from '../Assets/Images/Apip.png'
import Hexa from '../Assets/Images/Hexagon.png'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Element } from 'react-scroll';

const sectionHome = () => {
    return (
        <>
            <Element name='home'>
                <ParallaxBanner className='content1' style={{ aspectRatio: '2 / 1' }} layers={[{children: <img src={Hexa}/>, speed: -50}]}>
                    <Parallax 
                        speed={-100} 
                        scale={[5, 0,'easeOutQuad']}
                    >
                        <h1 className="startText">YOU SEE</h1>
                    </Parallax>
                    <div className="pageSlice">
                        <img className='w2' src={Wave2} alt="Wave2" />
                        <img className='w1' src={Wave1} alt="Wave1" />
                    </div>
                </ParallaxBanner>
            </Element>
        </>
    )
}

export default sectionHome