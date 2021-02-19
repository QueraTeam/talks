import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('checks prime numbers', () => {
  render(<App />);
  const inputElement = screen.getByLabelText("Input");
  const resultSpan = screen.getByTestId("result");

  fireEvent.change(inputElement, {target: {value: "2"}})
  expect(resultSpan).toHaveTextContent("1");

  fireEvent.change(inputElement, {target: {value: "6"}})
  expect(resultSpan).toHaveTextContent("3");

  // Uncomment following lines to increase mutation score

  // fireEvent.change(inputElement, {target: {value: "6"}})
  // expect(resultSpan).toHaveTextContent(/^3$/);

  // fireEvent.change(inputElement, {target: {value: "20"}})
  // expect(resultSpan).toHaveTextContent("8");

});
