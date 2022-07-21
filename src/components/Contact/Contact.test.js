import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

test('Book appoinment name should be rendered', () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText(/name/i);
    expect(inputName).toBeInTheDocument();
});

test('Book appoinment email value should be empty first time', () => {
    render(<Contact />);
    const inputEmail = screen.getByPlaceholderText(/Email/i);
    expect(inputEmail.value).toBe('');
});

test('Button input should be rendered', () => {
    render(<Contact />);
    const buttonInput = screen.getByTestId('contact-btn');
    expect(buttonInput).toBeInTheDocument();
});

test('snapshot testing --Contact', () => {
    const component = renderer.create(<Contact />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --Contact
it('render without crashing --contact', () => {
    const div = document.createElement('div');
    render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
});