import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />);
  // type into all inputs
  //  1. query for all inputs
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  //  2. run fireEvent event to add text
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Appleseed' } });
  fireEvent.change(addressInput, { target: { value: '1234 Apple Rd' } });
  fireEvent.change(cityInput, { target: { value: 'Heartland' } });
  fireEvent.change(stateInput, { target: { value: 'USA' } });
  fireEvent.change(zipInput, { target: { value: '54321' } });

  // click submit button
  //  1. query for the button
  const checkoutButton = screen.getByRole(/submit/i);
  //  2. run the click event on the button
  fireEvent.click(checkoutButton);

  // assert that success message shows with input details
  //  1. query for success message
  const successMessage = screen.getByTestId('successMessage');
  //  2. assert that success message is being rendered
  expect(successMessage).toBeInTheDocument();
});
