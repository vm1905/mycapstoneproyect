import { initializeTimes } from './BookingPage'; 
import { fetchAPI } from '../BookingAPI';
import { updateTimes } from './BookingPage';

jest.mock('../BookingAPI', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should call fetchAPI with the current date', () => {
    const currentDate = new Date();
    initializeTimes();
    expect(fetchAPI).toHaveBeenCalledWith(currentDate);
  });

  it('should return an array of times', () => {
    const mockFetchAPI = jest.fn(() => [
      "17:00", "17:30",
      "18:00", "18:30",
      "19:00", "19:30",
      "20:00", "20:30",
      "21:00", "21:30",
      "22:00", "22:30",
      "23:00", "23:30",
    ]);

    require('../BookingAPI').fetchAPI = mockFetchAPI;

    const times = initializeTimes();
    expect(times).toEqual([
      "17:00", "17:30",
      "18:00", "18:30",
      "19:00", "19:30",
      "20:00", "20:30",
      "21:00", "21:30",
      "22:00", "22:30",
      "23:00", "23:30",
    ]);
  });
});

describe('updateTimes', () => {
  it('should call fetchAPI with the action date when action type is UPDATE_TIMES', () => {
    const currentDate = new Date('2024-03-13');
    const action = { type: 'UPDATE_TIMES', date: currentDate };
    updateTimes(null, action);
    expect(fetchAPI).toHaveBeenCalledWith(currentDate);
  });

  it('should return the state when action type is not UPDATE_TIMES', () => {
    const initialState = ['some', 'initial', 'times'];
    const action = { type: 'SOME_OTHER_ACTION' };
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should return the result of fetchAPI when action type is UPDATE_TIMES', async () => {
    const mockedResult = ["mocked", "times", "array"];
    const action = { type: 'UPDATE_TIMES', date: new Date() };
    fetchAPI.mockResolvedValue(mockedResult);

    const result = await updateTimes(null, action);
    expect(result).toEqual(mockedResult);
  });
});

