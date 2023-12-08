import {createStore, combineReducers} from 'redux';
import locationReducer from './reducer';
const rootReducer = combineReducers({location: locationReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
