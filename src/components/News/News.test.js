import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import News from './News';

test('snapshot testing --news', () => {
    const component = renderer.create(<News />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// crash test --news
it('render without crashing --news', () => {
    const div = document.createElement('div');
    render(<News />, div);
    ReactDOM.unmountComponentAtNode(div);
});
