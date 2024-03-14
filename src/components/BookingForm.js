import { useState } from "react";
import './BookingForm.css';

function BookingForm(props) {

    const occasions = ['Birthday', 'Anniversary', 'Graduation', 'Other'];

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        date: '',
        time: props.availableTimes[0],
        guests: 1,
        occasion: occasions[0]
    });

    const [errors, setErrors] = useState({});

    const validateFormData = (data) => {
        let errors = {};
    
        if (!data.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
    
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }
    
        if (!data.date.trim()) {
            errors.date = 'Date is required';
        }    
        return errors;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times} value={times}>{times}</option>)
      );

    function handleDateChange(e) {
        const selectedDate = e.target.value;

        setFormData({
            ...formData,
            date: e.target.value
        });

        props.updateTimes({ type: 'UPDATE_TIMES', date: selectedDate });

        setFinalTime(props.availableTimes.map((times) => <option key={times} value={times}>{times}</option>));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
            localStorage.setItem('formData', JSON.stringify(formData));  
            props.submitForm(formData);
        } else {
            setErrors(validationErrors);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="fullName">* Full Name:</label>
                        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange}  aria-label="Full name"/>
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>

                    <div>
                        <label htmlFor="email">* Email:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange}  aria-label="Email"/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="date">* Select date:</label>
                        <input type="date" name="date" id="date" value={formData.date} onChange={handleDateChange}  aria-label="Select date"/>
                        {errors.date && <span className="error">{errors.date}</span>}
                    </div>

                    <div>
                        <label htmlFor="time">* Select time:</label>
                        <select name="time" id="time" data-testid="time" value={formData.time} onChange={handleInputChange}>
                            {finalTime}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="guests">* Number of guests:</label>
                        <input type="number" name="guests" id="guests" value={formData.guests} onChange={handleInputChange} aria-label="Number of guests" />
                    </div>

                    <div>
                        <label htmlFor="occasion">* Occasion:</label>
                        <select name="occasion" id="occasion" onChange={handleInputChange} aria-label="Occasion">
                            {occasions.map((occasion) => (
                                <option key={occasion} value={occasion}>
                                    {occasion}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="booking-button">Confirm Reservation</button>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;