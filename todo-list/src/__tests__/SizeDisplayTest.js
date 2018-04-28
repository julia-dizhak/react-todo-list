/**
 * @jest-environment node
 */

import { bytesDisplay } from './../components/counter/Display';
import SizeDisplay from './../components/counter/Display';
import React from 'react';
import renderer from 'react-test-renderer';

describe('bytesDisplay', () => {
    it('divides', () => {
        const actual = bytesDisplay(1000001);
        expect(actual).toMatch('KB');
    });

    it('does not divided', () => {
        const actual = bytesDisplay(1000000);
        expect(actual).not.toMatch('KB');
    });
});

// describe('SizeDisplay', () => {
//     it('works', () => {
//         const tree = renderer.create(<SizeDisplay counter={42} />).toJSON();
//         console.log(tree);
//         //expect(tree.children[0]).toBe('42B');

//         expect(tree).toMatchSnapshot();
//     });
// })