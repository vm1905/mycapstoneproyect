import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Footer from './Footer';
import BookingImage from '../images/book.jpg';
import { MdCheckCircleOutline } from "react-icons/md";
import './Confirm.css';


function Confirm() {
    // const location = useLocation();
    // const { formData } = location.state; 
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            setFormData(formData);
        }
    }, []);

    console.log(formData.date);


    function formatDate(dateString) {
        if (!dateString || typeof dateString !== 'string') {
          return 'Invalid Date';
        }
      
        // Split the input date string into year, month, and day components
        const parts = dateString.split('-');
        if (parts.length !== 3) {
          return 'Invalid Date';
        }
      
        const [year, month, day] = parts.map(Number);
      
        // Construct the Date object
        const date = new Date(year, month - 1, day); // Note: Month is zero-based
      
        // Format the date using date-fns
        const formattedDate = format(date, 'eeee, MMMM dd, yyyy');
        return formattedDate;
    }

    const formattedDate = formatDate(formData.date);
    console.log(formattedDate);

    return (
        <>
            <header className="booking-header">
                <img src={BookingImage} alt="Book a table" className="booking-image" />
            </header>
            <section className='bookingConfirmation'>
                <h3>Thank you!</h3>
                <p className='checkIcon'><MdCheckCircleOutline size={80} /></p>
                <p className='fullName'>{formData.fullName}</p>
                <div className='dateDescription'>
                    <p>{formattedDate}</p>
                    <p>for {formData.guests} guests at {formData.time} hs.</p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Confirm;