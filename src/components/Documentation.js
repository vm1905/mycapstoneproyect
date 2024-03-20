import React from 'react';
import Footer from './Footer';
import DocsImage from '../images/docs.jpg';
import './Documentation.css';

function Documentation() {
    return (
        <>
        <header className="booking-header" id='top'>
            <img src={DocsImage} alt="Book a table" className="booking-image" />
        </header>
        <section>
            <h3>Reservation Form Guide</h3>
            <p>To make a reservation, please follow the steps below:</p>
            <ol className='doc-list'>
                <li>
                    <b className='input-item'>Full Name</b>
                    <p>Enter your full name in the provided text field.</p>
                    <p>This field is mandatory, so ensure it is not left empty.</p>
                </li>
                <li>
                    <b className='input-item'>Email</b>
                    <p>Provide your email address in the designated email input field.</p>
                    <p>A valid email format is required (e.g., example@example.com).</p>
                </li>
                <li>
                    <b className='input-item'>Date</b>
                    <p>Choose the desired reservation date by selecting it from the calendar picker.</p>
                    <p>Ensure to select a date within the next four months.</p>
                </li>
                <li>
                    <b className='input-item'>Time</b>
                    <p>Select the preferred time for your reservation from the dropdown menu.</p>
                    <p>Available times are listed for selection.</p>
                </li>
                <li>
                    <b className='input-item'>Number of guests</b>
                    <p>Enter the number of guests accompanying you for the reservation.</p>
                    <p>The number of guests should be between 1 and 10.</p>
                </li>
                <li>
                    <b className='input-item'>Occasion</b>
                    <p>Choose the occasion for the reservation from the provided options (e.g., Birthday, Anniversary, Graduation, Other).</p>
                </li>
                <li>
                    <b className='input-item'>Confirmation</b>
                    <p>After filling in all the required fields, click on the "Confirm Reservation" button.</p>
                    <p>If any errors occur, they will be indicated next to the respective fields in red.</p>
                    <p>Correct any errors and resubmit the form.</p>
                </li>
            </ol>

            <p><strong>Note:</strong> Fields marked with an asterisk (*) are mandatory.</p>
            <p>Ensure all information provided is accurate before confirming your reservation.</p>
            <p>If you encounter any issues or need further assistance, feel free to reach out to our support team.</p>
        </section>
        <Footer />
        </>
    );
}

export default Documentation;
