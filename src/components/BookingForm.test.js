import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('should save formData to localStorage', async () => {
    const mockAvailableTimes = ['20:00', '22:00', '22:30'];
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmitForm} />
    );
    const fullNameInput = getByLabelText('* Full Name:');
    const emailInput = getByLabelText('* Email:');
    const dateInput = getByLabelText('* Select date:');
    const timeSelect = getByLabelText('* Select time:');
    const guestsInput = getByLabelText('* Number of guests:');
    const occasionSelect = getByLabelText('* Occasion:');
    
    const formData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      date: '2024-03-15',
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
});
