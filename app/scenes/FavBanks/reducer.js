import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';

export const { Types: bankTypes, Creators: bankActions } = createActions({
	addBank,
	deleteBank
});

export const initialState = fromJS({
	banksList: []
});

export const addBank = (state, { action }) => state;

export const deleteBank = (state, action) => state;

export const bankReducer = (state = initialState, action) =>
	produce(state, () => {
		switch (action.type.type) {
			case bankTypes.ADD_BANK: {
				const newBank = [...state.get('banksList'), action.data];
				return state.set('banksList', newBank);
			}
			case bankTypes.DELETE_BANK: {
				const newList = state
					.get('banksList')
					.filter(bank => bank.ifsc !== action.data.ifsc);
				return state
					.set('banksList', newList);
			}
			default:
				return state;
		}
	});
