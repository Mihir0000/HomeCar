import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

test('left right by role', () => {
    render(<Header />);
    const leftRightElement = screen.getByRole('contact_btn');
    expect(leftRightElement).toBeInTheDocument();
});

test('Button should be enabled', () => {
    render(<Header />);
    const inputBtn = screen.getByTestId('enable_btn');
    expect(inputBtn).not.toBeDisabled;
});

it('snapshot testing --header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

// crash test --header
it('render without crashing --header', () => {
    const div = document.createElement('div');
    render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});
