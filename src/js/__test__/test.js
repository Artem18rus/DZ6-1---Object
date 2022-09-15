/* eslint-disable no-unused-vars */
import { obj, total } from '../decision';

test('Function-OK', () => {
  const funcTotal = total(obj, ['name', 'level', 'attack']);
  expect(funcTotal).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Function-ERR', () => {
  const funcTotal = total(obj, ['name', 'level', 'attack', 'age']);
  expect(funcTotal).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
