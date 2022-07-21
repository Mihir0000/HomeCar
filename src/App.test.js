import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

// app
test('renders Diabetes and obesity Counselling', () => {
    render(<App />);
    const linkElement = screen.getByText(/Diabetes and obesity Counselling/i);
    expect(linkElement).toBeInTheDocument();
});

test('snapshot testing --app', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --app
it('render without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// fire Event
// const Button = ({onClick, children}) =>{
//    <button onClick={onClick}>{children}</button>
// }
// test('calls when click submit button', ()=>{
//    const handleClick = jest.fn();
//    render(<Button onClick={handleClick}>Click me</Button>)
//    fireEvent.click(screen.getByText(/click me/i));
//    expect(handleClick).toHaveBeenCalledTimes(1);
// })
