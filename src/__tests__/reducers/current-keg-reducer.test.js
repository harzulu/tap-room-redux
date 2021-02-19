import currentKegReducer from '../../reducers/current-keg-reducer.js';

describe('currentKegReducer', () => {
  let action;
  
  const currentState = {
    1: {
      name: "Miller Lite",
      brand: "MillerCoors",
      price: 94,
      alcoholContent: 5,
      pints: 124,
      id: 1
    },
    2: {
      name: "Angry Orchard",
      brand: "Boston Beer Co",
      price: 120,
      alcoholContent: 4,
      pints: 124,
      id: 2
    }
  };
  
  const kegDetail = {
    name: "Miller Lite",
    brand: "MillerCoors",
    price: 94,
    alcoholContent: 5,
    pints: 124,
    id: 1
  };

  test('Should return default state', () => {
    expect(currentKegReducer({}, { type: null })).toEqual({});
  })
});