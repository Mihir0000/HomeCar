import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Health from './Health';

test('snapshot testing --Health', () => {
    const component = renderer.create(<Health />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --Health
it('render without crashing --health', () => {
    const div = document.createElement('div');
    render(<Health />, div);
    ReactDOM.unmountComponentAtNode(div);
});
