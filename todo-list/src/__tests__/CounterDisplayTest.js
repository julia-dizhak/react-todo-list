/**
 * @jest-environment node
 */

import { bytesDisplay } from './../components/counter/Display';

describe('bytesDisplay', () => {
    it('divides', () => {
        const actual = bytesDisplay(1000001);
        expect(actual).toMatch('KB');
    });

    it('does not divided', () => {
        const actual = bytesDisplay(1000000);
        expect(actual).not.toMatch('KB');
    });
})