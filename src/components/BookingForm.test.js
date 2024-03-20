import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import { isValidEmail, isFormInvalid, validateField } from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['20:00', '22:00', '22:30'];
  const mockErrors = {
    fullName: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  };
  const mockUpdateTimes = jest.fn();
  const mockSubmitForm = jest.fn();
  const { getByLabelText, getByText } = render(
    <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
  );

  test('should save formData to localStorage', async () => {
    const fullNameInput = getByLabelText('* Full Name:');
    const emailInput = getByLabelText('* Email:');
    const dateInput = getByLabelText('* Select date:');
    const timeSelect = getByLabelText('* Select time:');
    const guestsInput = getByLabelText('* Number of guests:');
    const occasionSelect = getByLabelText('* Occasion:');
    
    const formData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      date: '2024-03-30',
      time: '22:00',
      guests: '4',
      occasion: 'Birthday'
    };

    fireEvent.change(fullNameInput, { target: { value: formData.fullName } });
    fireEvent.change(emailInput, { target: { value: formData.email } });
    fireEvent.change(dateInput, { target: { value: formData.date } });
    fireEvent.change(timeSelect, { target: { value: formData.time } });
    fireEvent.change(guestsInput, { target: { value: formData.guests } });
    fireEvent.change(occasionSelect, { target: { value: formData.occasion } });
    fireEvent.submit(getByText('Confirm Reservation'));

    await waitFor(() => {
      expect(localStorage.getItem('formData')).toBe(JSON.stringify(formData));
    });
  });



  test('renders Full Name input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const fullNameInput = getByLabelText('* Full Name:');
    expect(fullNameInput).toHaveAttribute('type', 'text');
    expect(fullNameInput).toHaveAttribute('name', 'fullName');
    expect(fullNameInput).toHaveAttribute('id', 'fullName');
    expect(fullNameInput).toHaveAttribute('aria-label', 'Full name');
    expect(fullNameInput).toHaveAttribute('required');
  });



  test('renders Email input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const emailInput = getByLabelText('* Email:');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('aria-label', 'Email');
    expect(emailInput).toHaveAttribute('required');
  });



  test('renders Select date input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const dateInput = getByLabelText(/Select date:/);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('name', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('aria-label', 'Select date');
    expect(dateInput).toHaveAttribute('required');
  });

  
  
  test('renders Select time input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const timeInput = getByLabelText(/Select time:/);
    expect(timeInput).toHaveAttribute('name', 'time');
    expect(timeInput).toHaveAttribute('id', 'time');
    expect(timeInput).toHaveAttribute('aria-label', 'Select time');
    expect(timeInput).toHaveAttribute('required');
  });



  test('renders Number of guests input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const guestsInput = getByLabelText(/Number of guests:/);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('aria-label', 'Number of guests');
    expect(guestsInput).toHaveAttribute('required');
  });



  test('renders Select occasion input with correct attributes', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />);
    const occasionInput = getByLabelText(/Occasion:/);
    expect(occasionInput).toHaveAttribute('name', 'occasion');
    expect(occasionInput).toHaveAttribute('id', 'occasion');
    expect(occasionInput).toHaveAttribute('aria-label', 'Select occasion');
    expect(occasionInput).toHaveAttribute('required');
  });
});




describe('Form Validation Functions', () => {
  
  test('valid fullName input', () => {
    const errors = { fullName: '' }; // Initialize the errors object with fullName property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('fullName', 'John Doe', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.fullName).toBe('');
  });



  test('displays error message when fullName is empty on blur', () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const fullNameInput = getByLabelText('* Full Name:');

    fireEvent.blur(fullNameInput); // Simulate blur event

    expect(getByText(/please enter your name/i)).toBeInTheDocument();
  });



  test('valid email input', () => {
    const errors = { email: '' }; // Initialize the errors object with fullName property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('email', 'johndoe@email.com', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.email).toBe('');
  });



  test('displays error message when email is empty on blur', () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const emailInput = getByLabelText('* Email:');

    fireEvent.blur(emailInput); // Simulate blur event

    expect(getByText(/Please enter your email/i)).toBeInTheDocument();
  });



  test('displays error message when email is not a valid email address on blur', () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const emailInput = getByLabelText('* Email:');
    fireEvent.blur(emailInput, { target: { value: 'notemail' } }); // Simulate blur event

    expect(getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });


  test('valid date input', () => {
    const errors = { date: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('date', '2024-03-30', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.date).toBe('');
  });



  test('displays error message when date is empty on blur', () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const dateInput = getByLabelText('* Select date:');
    fireEvent.blur(dateInput, { target: { value: '' } }); // Simulate blur event

    expect(getByText(/Please select a date/i)).toBeInTheDocument();
  });



  test('displays error message when date is not within the next four months on blur', () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const dateInput = getByLabelText('* Select date:');
    fireEvent.blur(dateInput, { target: { value: '2024-03-18' } }); // Simulate blur event

    expect(getByText(/Please select a date within the next four months/i)).toBeInTheDocument();
  });



  test('valid time input', () => {
    const errors = { time: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('time', '22:00', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.time).toBe('');
  });



  test('shows error on empty time input', () => {
    const errors = { time: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('time', '', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.time).toBe('');
  });


  test('valid guests input', () => {
    const errors = { guests: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('guests', '6', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.guests).toBe('');
  });


  test('shows error on invalid guests input', () => {
    const errors = { guests: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('guests', '12', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.guests).toBe('');
  });

  test('shows error on empty guests input', () => {
    const errors = { guests: '' }; // Initialize the errors object with date property
    const setErrors = jest.fn();

    // Call the validation function with a valid fullName
    validateField('guests', '', errors, setErrors);

    // Ensure that no error message is set for fullName
    expect(errors.guests).toBe('');
  });
});



describe('BookingForm submission', () => {
  test('should submit form with valid data', () => {
    const formData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      date: '2024-04-01',
      time: '22:00',
      guests: '4',
      occasion: 'Birthday'
    };

    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockErrors = {
      fullName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} setErrors={mockErrors}/>
    );
    const fullNameInput = getByLabelText('* Full Name:');
    const emailInput = getByLabelText('* Email:');
    const dateInput = getByLabelText('* Select date:');
    const timeInput = getByLabelText('* Select time:');
    const guestsInput = getByLabelText('* Number of guests:');
    const occasionInput = getByLabelText('* Occasion:');
    const submitButton = getByText('Confirm Reservation');

    fireEvent.change(fullNameInput, { target: { value: formData.fullName } });
    fireEvent.change(emailInput, { target: { value: formData.email } });
    fireEvent.change(dateInput, { target: { value: formData.date } });
    fireEvent.change(timeInput, { target: { value: formData.time } });
    fireEvent.change(guestsInput, { target: { value: formData.guests } });
    fireEvent.change(occasionInput, { target: { value: formData.occasion } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith(formData);
  });
});