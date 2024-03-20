import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import './BookingForm.css';

export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateField(name, value, thisErrors, setThisErrors) {

    let newErrors = { ...thisErrors };

    switch (name) {
        case 'fullName':
            newErrors.fullName = value.trim() ? '' : 'Please enter your name';
            break;
        case 'email':
            newErrors.email = value ? (isValidEmail(value) ? '' : 'Please enter a valid email address') : 'Please enter your email';
            break;
        case 'date':
            newErrors.date = value ? '' : 'Please select a date';
            // Additional validation for date range
            if (value) {
                const selectedDate = new Date(value);
                const today = new Date();
                const fourMonthsLater = new Date();
                fourMonthsLater.setMonth(today.getMonth() + 4);

                if (selectedDate < today || selectedDate > fourMonthsLater) {
                    newErrors.date = 'Please select a date within the next four months';
                }
            }
            break;
        case 'time':
            newErrors.time = value ? '' : 'Please select a time';
            break;
        case 'guests':
            newErrors.guests = value ? '' : 'Please enter number of guests between 1 and 10';
            if(value){
                var xNum = parseInt(value);
                if(xNum < 1 || xNum > 10){
                    newErrors.guests = 'Number of guests must be between 1 and 10';
                }
            }
            break;

        default:
            break;
        
    }
    setThisErrors(newErrors);
}

export function isFormInvalid(formData, thisErrors) {
    return (
        !formData.fullName ||
        !formData.email ||
        !formData.date ||
        !formData.time ||
        !formData.guests ||
        !formData.occasion ||
        (thisErrors && Object.values(thisErrors).some(thisError => thisError))
    );
}


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

    const [thisErrors, setThisErrors] = useState(props.errors);
    const [finalTime, setFinalTime] = useState(props.availableTimes);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        validateField(name, value, thisErrors, setThisErrors);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleOnBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value, thisErrors, setThisErrors);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form
        let formIsValid = true;
        const errorsCopy = { ...thisErrors };

        // Validate name
        if (!formData.fullName) {
            errorsCopy.fullName = 'Please enter your name';
            formIsValid = false;
        }

        // Validate email
        if (!formData.email) {
            errorsCopy.email = 'Please enter your email';
            formIsValid = false;
        } else if (!isValidEmail(formData.email)) {
            errorsCopy.email = 'Please enter a valid email address';
            formIsValid = false;
        }

        // Validate date
        if (!formData.date) {
            errorsCopy.date = 'Please select a date';
            formIsValid = false;
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            const fourMonthsLater = new Date();
            fourMonthsLater.setMonth(today.getMonth() + 4);

            if (selectedDate < today || selectedDate > fourMonthsLater) {
                errorsCopy.date = 'Please select a date within the next four months';
                formIsValid = false;
            } else {
                props.updateTimes({ type: 'UPDATE_TIMES', date: selectedDate });
                if (props.availableTimes) {
                    setFinalTime(props.availableTimes);
                }
                formIsValid = true;
            }
        }

        // Validate time
        if (!formData.time) {
            errorsCopy.time = 'Please select a time';
            formIsValid = false;
        }

        // Validate guests
        if (!formData.guests) {
            errorsCopy.guests = 'Please enter the number of guests between 1 and 10';
            formIsValid = false;
        } else {
            var xNum = parseInt(formData.guests);
            if(xNum < 1 || xNum > 10){
                errorsCopy.guests = 'Number of guests must be between 1 and 10';
                formIsValid = false;
            }
        }

        // Update errors state
        setThisErrors(errorsCopy);

        if (formIsValid) {
            // Handle form submission with valid data
            console.log('Submitted data:', formData);
            localStorage.setItem('formData', JSON.stringify(formData));  
            props.submitForm(formData);
        } else {
            console.log("Form is not valid");
        }
    };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className={thisErrors?.fullName ? 'error-input' : ''}>
                        <label htmlFor="fullName">* Full Name:</label>
                        <input 
                            autoFocus 
                            type="text" 
                            name="fullName" 
                            id="fullName" 
                            value={formData.fullName} 
                            onChange={handleInputChange} 
                            onBlur={handleOnBlur}
                            aria-label="Full name"
                            required
                        />
                        {thisErrors?.fullName && <div className="error"><MdErrorOutline className="error-icon" /> {thisErrors?.fullName}</div>}
                    </div>

                    <div className={thisErrors?.email ? 'error-input' : ''}>
                        <label htmlFor="email">* Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            onBlur={handleOnBlur}
                            aria-label="Email"
                            required
                        />
                        {thisErrors?.email && <div className="error"><MdErrorOutline className="error-icon" />{thisErrors?.email}</div>}
                    </div>

                    <div className={thisErrors?.date ? 'error-input' : ''}>
                        <label htmlFor="date">* Select date:</label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            value={formData.date} 
                            onChange={handleInputChange}
                            onBlur={handleOnBlur} 
                            aria-label="Select date"
                            required
                        />
                        {thisErrors?.date && <div className="error"><MdErrorOutline className="error-icon" />{thisErrors?.date}</div>}
                    </div>

                    <div>
                        <label htmlFor="time">* Select time:</label>
                        <select 
                            name="time" 
                            id="time" 
                            data-testid="time" 
                            value={formData.time} 
                            onChange={handleInputChange}
                            aria-label="Select time"
                            required
                        >
                             {finalTime.map((finalT) => (
                                <option key={finalT} value={finalT}>
                                    {finalT}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={thisErrors?.guests ? 'error-input' : ''}>
                        <label htmlFor="guests">* Number of guests:</label>
                        <input 
                            type="number" 
                            name="guests" 
                            id="guests" 
                            value={formData.guests} 
                            onChange={handleInputChange} 
                            onBlur={handleOnBlur}
                            aria-label="Number of guests" 
                            required
                        />
                        {thisErrors?.guests && <div className="error"><MdErrorOutline className="error-icon" />{thisErrors?.guests}</div>}
                    </div>

                    <div>
                        <label htmlFor="occasion">* Occasion:</label>
                        <select 
                            name="occasion" 
                            id="occasion" 
                            onChange={handleInputChange} 
                            aria-label="Select occasion"
                            required
                        >
                            {occasions.map((occasion) => (
                                <option key={occasion} value={occasion}>
                                    {occasion}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="booking-button">
                        <button 
                            type="submit" 
                            className="button" 
                            aria-label="Confirm Reservation" 
                            aria-disabled={isFormInvalid(formData, thisErrors)} 
                            disabled={isFormInvalid(formData, thisErrors)}
                        >Confirm Reservation</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;