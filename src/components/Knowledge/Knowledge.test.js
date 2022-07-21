import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Knowledge from './Knowledge';

test('snapshot testing --knowledge', () => {
    const component = renderer.create(<Knowledge />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --Knowledge
it('render without crashing --knowledge', () => {
    const div = document.createElement('div');
    render(<Knowledge />, div);
    ReactDOM.unmountComponentAtNode(div);
});
