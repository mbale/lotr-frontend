// the actual map we go through
const middleEarthMap = [
  ['-', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', 'O', '-', '-', '-', 'O', '-', 'D', '-', '-'],
  ['-', '-', '-', '-', 'O', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', 'O', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', 'O', '-', 'O', '-', '-'],
  ['F', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', '-', 'O', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', '-', 'O', 'O', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', 'O', '-'],
];

/**
 * Available objects on the map
 * Value is mapped to every possible case
 * e.g '-' => is nothing in map array
 *
 * @enum {number}
 */
enum MapObject {
  Frodo = 'F',
  Doom = 'D',
  Orc = 'O',
  Nothing = '-'
}

/**
 * Steps schema
 * Value is mapped to the request params format
 * request.query.steps = 's,w,n'
 *
 * @enum {number}
 */
enum StepType {
  South = 's',
  North = 'n',
  East = 'e',
  West = 'w',
}

/**
 * Returns the correct index for game map objects
 *
 * @param {MapObject} object
 * @param {string[][]} map
 * @returns
 */
const getObjectPosition = (object: MapObject, map: string[][]) => {
  const rowIndex = map.findIndex(
    (row) => row.includes(object),
  );
  const colIndex = map[rowIndex].findIndex(
    (col) => col.includes(object),
  );

  return {
    rowIndex,
    colIndex,
  };
};

export {
  getObjectPosition,
  StepType,
  MapObject,
  middleEarthMap,
};
