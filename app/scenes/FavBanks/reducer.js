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

export const getBanks = (state, {action}) =>
	state.set('banksList', []);

export const addBank = (state, { action }) => {
	// const newBank = state.banksList.push(action.bankItem)
	return state
	  	.set('banksList', [])
}

export const deleteBank = (state, action) => {
	const newList = state.banksList.filter(bank => bank.ifsc !== action.ifsc );
  	return state
	  	.set('banksList', newList)
}


export const bankReducer = (state = initialState, action ) =>
  	produce(state, () => {
		  console.log('action in reducer-------- ',action)
	  	switch (action.type.type) {
		  	case bankTypes.GET_BANKS: {
				  	console.log('in get bn -----------')
					return state
			  	}
		  	case bankTypes.ADD_BANK:
			  	{	
					const newBank = [...state.get('banksList'), action.data];
					return state
						.set('banksList', newBank)
				}
		  	case bankTypes.DELETE_BANK:
			  	{
					const newList = state.get('banksList')
						.filter(bank => bank.ifsc !== action.ifsc );
  					return state
	  					.set('banksList', newList)
				}
		  	default:
			  	return state;
	  }
});