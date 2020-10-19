import { combineReducers } from 'redux';
import { exampleContainerReducer as example } from '@scenes/ExampleScreen/reducer';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';
import { bankReducer } from '@scenes/FavBanks/reducer';

export default () => {
	const rootReducer = combineReducers({
		example,
		bank: bankReducer
	});

	return configureStore(rootReducer, rootSaga);
};
