import React from 'react';
import Sample from './Sample';
import { shallow } from 'enzyme';

describe('Sample Component', () => {
    test('should handle click correctly', () => {
        const logSpy = jest.spyOn(console, 'log');
        const wrapper = shallow(<Sample></Sample>);
        const button = wrapper.find('button');
        expect(button.text()).toBe('Click Me');
        button.simulate('click');
        expect(logSpy).toBeCalledWith('hello world');
    });
});


// mock data bind
test('mock data bind', ()=>{
  const myMock2 = jest.fn();
  const b = {};
  const bound = myMock2.bind(b);
  bound();
  console.log(myMock2.mock.calls.length);
})

