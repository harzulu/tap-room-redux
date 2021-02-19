import kegListReducer from '../../reducers/keg-list-reducer.js';

describe('kegListReducer', () => {
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

  test('Should return the default state', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new keg to master keg list', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegDetail;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: price,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

});