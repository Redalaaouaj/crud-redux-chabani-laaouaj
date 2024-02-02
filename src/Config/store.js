import {legacy_createStore as createStore} from 'redux';
import reducer, { initialState } from './Reducers/locataireReducer';

const store = createStore(reducer,initialState);
export default store;