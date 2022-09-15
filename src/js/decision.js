/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function total(objNew, [...rest]) {
  const arrProm = [...rest];

  function f() {
    const arr = [];
    for (let i = 0; arrProm.length > i; i += 1) {
      for (const key in objNew) {
        if (arrProm[i] in objNew) {
          const objectItem1 = {
            key: arrProm[i],
            value: objNew[arrProm[i]],
          };
          arr.push(objectItem1);
          break;
        }
      }
      delete objNew[arrProm[i]];
    }
    return arr;
  }
  const oneArray = f();

  const arrSortKeys = [];
  for (const key in objNew) {
    arrSortKeys.push(`${key}`);
  }
  arrSortKeys.sort();

  function f2() {
    const arr2 = [];
    for (let i = 0; arrSortKeys.length > i; i += 1) {
      for (const key in objNew) {
        if (arrSortKeys[i] in objNew) {
          const objectItem2 = {
            key: arrSortKeys[i],
            value: objNew[arrSortKeys[i]],
          };
          arr2.push(objectItem2);
          break;
        }
      }
    }
    return arr2;
  }
  const twoArray = f2();

  const totalArray = [...oneArray, ...twoArray];
  return totalArray;
}
export const funcTotal = total(obj, ['name', 'level', 'attack']);
