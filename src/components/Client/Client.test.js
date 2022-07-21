import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import Client from './Client';


test('snapshot testing --client', () => {
    const component = renderer.create(<Client />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --client
it('render without crashing --client', () => {
    const div = document.createElement('div');
    render(<Client />, div);
    ReactDOM.unmountComponentAtNode(div);
});