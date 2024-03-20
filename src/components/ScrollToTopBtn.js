import { useState } from 'react';
import './ScrollToTopBtn.css';
import { FaAngleUp } from "react-icons/fa6";

function ScrollToTopBtn() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 300) {
            setVisible(true);
        } else if(scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return(
        <>
        <button className='scroll-to-top-btn' onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}>
            <FaAngleUp size={30} title='Scroll to Top'/>
        </button>
        </>
    );
}

export default ScrollToTopBtn;