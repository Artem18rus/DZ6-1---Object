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

export function func(objNew, [a, b]) {
  const arr = [];
  for (const key in objNew) {
    if (a in objNew) {
      const objectItem1 = {
        key: a,
        value: objNew[a],
      };
      arr.push(objectItem1);
      break;
    }
  }
  for (const key in objNew) {
    if (b in objNew) {
      const objectItem2 = {
        key: b,
        value: objNew[b],
      };
      arr.push(objectItem2);
      break;
    }
  }

  delete objNew[a];
  delete objNew[b];

  const arrSortKeys = [];
  for (const key in objNew) {
    arrSortKeys.push(`${key}`);
  }
  arrSortKeys.sort();

  for (const key in objNew) {
    if (arrSortKeys[0] in objNew) {
      const objectItem1 = {
        key: arrSortKeys[0],
        value: objNew[arrSortKeys[0]],
      };
      arr.push(objectItem1);
      break;
    }
  }

  for (const key in objNew) {
    if (arrSortKeys[0] in objNew) {
      const objectItem2 = {
        key: arrSortKeys[1],
        value: objNew[arrSortKeys[1]],
      };
      arr.push(objectItem2);
      break;
    }
  }

  for (const key in objNew) {
    if (arrSortKeys[2] in objNew) {
      const objectItem3 = {
        key: arrSortKeys[2],
        value: objNew[arrSortKeys[2]],
      };
      arr.push(objectItem3);
      break;
    }
  }
  return arr;
}

export const itemFunc = func(obj, ['attack', 'health']);
