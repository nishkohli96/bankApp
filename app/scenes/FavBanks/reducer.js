import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';

export const { Types: bankTypes, Creators: bankActions } = createActions({
	getBanks,
	addBank,
	deleteBank
});

export const initialState = fromJS({
	banksList: [],
});

export const getBanks = state =>
	state.set('banksList', []);

export const addBank = (state, { action }) => {
	console.log('state ',state);
	console.log('action ',action);
	// const newBank = state.banksList.push(action.bankItem)
	return state
	  	.set('banksList', [])
}

export const deleteBank = (state, action) => {
	const newList = state.banksList.filter(bank => bank.ifsc !== action.ifsc );
  	return state
	  	.set('banksList', newList)
}


export const bankReducer = (state = initialState, action) =>
  	produce(state, () => {
	  	switch (action.type) {
		  	case bankTypes.GET_BANKS:
			  	return getBanks(state, action);
		  	case bankTypes.ADD_BANK:
			  	return addBank(state, action);
		  	case bankTypes.DELETE_BANK:
			  	return deleteBank(state, action);
		  	default:
			  	return state;
	  }
});