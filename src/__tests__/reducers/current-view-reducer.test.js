import currentViewReducer from '../../reducers/current-view-reducer.js';

describe('currentViewReducer', () => {
  
  test('Should return default state', () => {
    expect(currentViewReducer(false, { type: null })).toEqual(false);
  });
});