/**
 * @jest-environment node
*/
 
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ItemList from './../components/list/ItemList';

describe('ItemList', () => {
    it('should render component correctly', () => {
        const container = renderer.create(<ItemList />).toJSON()
        expect(container).toMatchSnapshot();
    });

    // describe('case when when no items are given', () => {
    //     // const container = document.createElement('div');
    //     // ReactDOM.render(<ItemList items={[]} />, container);

    //     const container = renderer.create(<ItemList items={[]} />).toJSON()
    //     expect(container).toMatchSnapshot();
    //     // shallow(<ItemList items={[]} />);

    //     //expect(container.innerHTML).toBe('no  items');
    //     //expect(container.textContent).toMatch('no items');
    // });

    // describe('case with the given items', () => {
    //     const container = document.createElement('div');
    //     ReactDOM.render(<ItemList items={['string1, string2']} />, container);
    //     expect(container.textContent).toMatch('string1');
    //     expect(container.textContent).toMatch('string2');
    // });
});
