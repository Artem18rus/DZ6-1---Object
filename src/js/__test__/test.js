/* eslint-disable no-unused-vars */
import { obj, func, itemFunc } from '../decision';

test('Function-OK', () => {
  expect(itemFunc).toEqual([
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
