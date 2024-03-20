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

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times} value={times}>{times}</option>)
    );

    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({}); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        validateField(name, value);

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        validateField(name, formData[name]);

        setTouchedFields({
            ...touchedFields,
            [name]: true
        });
    };

    const validateField = (name, value) => {
        console.log(value);
        let errorMessage = '';
        if(name !== 'guests'){
            var x = value.trim();
        }

        if(name === 'fullName'){
            if(!x){
                errorMessage = 'Full name is required';
            }
        } else if(name === 'email'){
            if(!x){
                errorMessage = 'Email is required';
            } else if(!isValidEmail(x)){
                errorMessage = 'Invalid email address';
            }
        } else if(name === 'date'){
            if(!x){
                errorMessage = 'Date is required';
            } else {
                props.updateTimes({ type: 'UPDATE_TIMES', date: x });
                setFinalTime(props.availableTimes.map((times) => <option key={times} value={times}>{times}</option>));
            }
        } else if(name === 'guests'){
            var xNum = parseInt(value);
            if(xNum < 1 || xNum > 10){
                errorMessage = 'Number of guests must be between 1 and 10';
            }
        } else {
            errorMessage = '';
        }

        setErrors({
            ...errors,
            [name]: errorMessage
        });
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const fullNameValid = validateField('fullName', formData.fullName);
        const emailValid = validateField('email', formData.email);
        const dateValid = validateField('date', formData.date);
        const guestsValid = validateField('guests', formData.guests);

        // Form is valid if all fields are valid
        return fullNameValid && emailValid && dateValid && guestsValid;
    };

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formData);
        const formIsValid = validateForm();
        
        if(formIsValid){
            localStorage.setItem('formData', JSON.stringify(formData));  
            props.submitForm(formData);
        } else {
            console.log("form is not valid");
        }
    };

    const hasErrors = Object.values(errors).some(error => error);
    console.log("hasError? ", hasErrors);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="fullName">* Full Name:</label>
                        <input autoFocus type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} onBlur={handleBlur} aria-label="Full name"/>
                        {touchedFields.fullName && errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>

                    <div>
                        <label htmlFor="email">* Email:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} aria-label="Email"/>
                        {touchedFields.email && errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="date">* Select date:</label>
                        <input type="date" name="date" id="date" value={formData.date} onChange={handleInputChange} onBlur={handleBlur} aria-label="Select date"/>
                        {touchedFields.date && errors.date && <span className="error">{errors.date}</span>}
                    </div>

                    <div>
                        <label htmlFor="time">* Select time:</label>
                        <select name="time" id="time" data-testid="time" value={formData.time} onChange={handleInputChange}>
                            {finalTime}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="guests">* Number of guests:</label>
                        <input type="number" name="guests" id="guests" value={formData.guests} onChange={handleInputChange} onBlur={handleBlur} aria-label="Number of guests" />
                        {touchedFields.guests && errors.guests && <span className="error">{errors.guests}</span>}
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

                    <div className="booking-button">
                        <button type="submit" className="button" disabled={hasErrors}>Confirm Reservation</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;