import { Link } from 'react-scroll';

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if ( prevScrollPos > currentScrollPos ) {
        document.getElementById('scrollNav').style.top = "100vh";
        document.getElementById('scrollNav').style.opacity = "0";
    } else {
        document.getElementById('scrollNav').style.top = "0";
        document.getElementById('scrollNav').style.opacity = "1";
    }
    prevScrollPos = currentScrollPos;
}

const Navbar = () => {
    return (
        <>
        <div id='scrollNav' className="navContainer">
            <div className="linked">
                <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeClass='navAcc'
                >
                    ABOUT
                </Link>
                <Link
                    to='project'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeClass='navAcc'
                >
                    PROJECT
                </Link>
                <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeClass='navAcc'
                >
                    CONTACT ME
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar