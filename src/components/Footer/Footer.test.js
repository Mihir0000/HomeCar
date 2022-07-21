import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('footer renders', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Useful Links/i);
    expect(linkElement).toBeInTheDocument();
});

test('snapshot testing --Footer', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Subscribe email enter', () => {
    render(<Footer />);
    const inputEmail = screen.getByPlaceholderText(/Enter Your Email/i);
    expect(inputEmail).toBeInTheDocument();
});

it('Should be components with footer', ()=>{
   const wrapper = shallow(<Footer email="abc@gmail.com" phone='1234567890' address='madhyamgram'/>);
   expect(wrapper).toMatchSnapshot();
})