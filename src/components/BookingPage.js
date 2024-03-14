// BookingPage.js

import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../BookingAPI";
import { useNavigate } from 'react-router-dom';
import BookingForm from "./BookingForm";
import Footer from './Footer';
import BookingImage from '../images/book.jpg';
import './BookingPage.css';

export function updateTimes(state, action) {
    if (action.type === 'UPDATE_TIMES') return fetchAPI(new Date(action.date));
    else return state;
}

export function initializeTimes() {
    return fetchAPI(new Date());
}

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    function submitForm(formData) {
        const submitResponse = submitAPI(formData);
        if(submitResponse === true){
            navigate("/confirm", { state: { formData } });
        }else{
            console.log("error sending form");
        }
    }

    return(
        <>
            <header className="booking-header">
                <img src={BookingImage} alt="Book a table" className="booking-image" />
            </header>
            <section>
                <h3>Reserve a Table</h3>
                <BookingForm 
                    availableTimes={availableTimes} 
                    updateTimes={dispatch} 
                    submitForm={submitForm} 
                />
            </section>
            <Footer />
        </>
    );
}

export default BookingPage;
