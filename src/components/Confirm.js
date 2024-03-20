import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { format } from 'date-fns';
import Footer from './Footer';
import ReservedImage from '../images/reserved.jpg';
import { MdCheckCircleOutline } from "react-icons/md";
import './Confirm.css';


function Confirm() {
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            const formData = JSON.parse(localStorage.getItem('formData'));
            if (formData) {
                setFormData(formData);
                setLoading(false);
            }
        }, 2000); // Simulating a delay of 2 seconds
        return () => clearTimeout(delay); // Clear timeout on unmount
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
                <img src={ReservedImage} alt="Book a table" className="booking-image" />
            </header>
            <section className='confirm'> 
              
                    <div className='bookingConfirmation'>
                        {loading ? (
                                <p>Checking availability...</p> // Display loading message while data is being fetched
                            ) : (
                                <>
                                    <h3>Thank you!</h3>
                                    <p className='checkIcon'><MdCheckCircleOutline size={80} /></p>
                                    <p className='fullName'>{formData.fullName}</p>
                                    <div className='dateDescription'>
                                        <p>{formattedDate}</p>
                                        <p>for {formData.guests} guests at {formData.time} hs.</p>
                                    </div>
                                    
                                    <Link className="button" to="/#home">home</Link>
                                </>
                        )}
                    </div>
            </section>
            <Footer />
        </>
    );
}

export default Confirm;