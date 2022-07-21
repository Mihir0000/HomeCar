import React from 'react';
import {  render, screen } from '@testing-library/react';
import New from './New';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// import jest from 'jest';

test('snapshot testing --new', () => {
    const component = renderer.create(<New />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --new
it('render without crashing --new', () => {
    const div = document.createElement('div');
    render(<New />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// it('should handle submit handler', () => {
//     const onClickSpy = jest.fn();
//     const wrapper = shallow(<New onClick={onClickSpy} />);
//     //  render(<New />);
//     //  const submit = screen.getByTestId('submitBtn');
//     //  expect(submit).toHaveBeenCalled()
//     wrapper.find('button').at(0).simulate('click');
//     //  wrapper.find('Button').props().onClick();
//     expect(onClickSpy).toHaveBeenCalled();
// });
// it('Test click Event', () => {
//     const mockCallBack = jest.fn();
//     const button = shallow(<New onClick={mockCallBack}>Click me</New>);
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(0);
// });

describe('button test component', () => {
    it('Test click Event', () => {
      const wrapper = shallow(<New/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('button')).toHaveLength(1);
    });
});

// test('btn click event', () => {
//     const btn = screen.getByTestId('submitBtn');
//     fireEvent.click(btn);
//     expect(btn).toBeInTheDocument();
// });

test('when submit btn clicked (name, email) required', () => {
    render(<New />);
    const Email = screen.getByTestId('input-email');
    const Name = screen.getByTestId('input-name');
    expect(Email).toBeRequired();
    expect(Name).toBeRequired();
});

test('check valid form', () => {
    render(<New />);
    const formData = screen.getByTestId('valid-form');
    expect(formData).not.toBeValid();
});
it('input checkbox checked', () => {
    render(<New />);
    const checkBox = screen.getByTestId('input-checkbox-checked');
    expect(checkBox).not.toBeChecked;
});
