import React from 'react';
import renderer from 'react-test-renderer';
import App from './App'


it('renders out the word app', ()=> {
    const component = renderer.create(<App></App>)

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot()

})
