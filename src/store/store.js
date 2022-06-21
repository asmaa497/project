/////////////////////////////////////////////////////////////
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import pageReducer from './reducer';
const store=createStore(pageReducer,composeWithDevTools());
export default store;