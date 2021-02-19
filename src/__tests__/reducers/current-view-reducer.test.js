import currentViewReducer from '../../reducers/current-view-reducer.js';

describe('currentViewReducer', () => {
  
  test('Should return default state', () => {
    expect(currentViewReducer(false, { type: null })).toEqual(false);
  });

  test('Should return the flipped state', () => {
    expect(currentViewReducer(false, { type: 'TOGGLE_PAGE' })).toEqual(false);
  });
});