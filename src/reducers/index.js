import currentKegReducer from './current-keg-reducer';
import currentViewReducer from './current-view-reducer';
import isEditingReducer from './is-editing-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentKeg: currentKegReducer,
  currentView: currentViewReducer,
  isEditing: isEditingReducer,
  masterKegList: kegListReducer
});

export default rootReducer;