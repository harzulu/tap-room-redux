import currentViewReducer from '../../reducers/current-view-reducer.js';

describe('currentViewReducer', () => {
  
  test('Should return default state', () => {
    expect(currentViewReducer(true, { type: null })).toEqual(false);
  });
});