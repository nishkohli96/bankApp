import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';

export const {
	Types: bankTypes,
	Creators: bankActions
} = createActions({
	requestFetchBanks: null,
	successFetchBanks: ['banks'],
	failureFetchBanks: ['errorMessage']
});

export const initialState = fromJS({
	banks: {},
	banksIsLoading: false,
	banksErrorMessage: null
});

export const fetchBanks = state =>
	state.set('banksIsLoading', true).set('banksErrorMessage', null);

export const successFetchBanks = (state, { user }) =>
	state
		.set('banks', banks)
		.set('banksIsLoading', false)
		.set('banksErrorMessage', null);

export const failureFetchBanks = (state, { errorMessage }) =>
	state
		.set('banks', {})
		.set('banksIsLoading', false)
		.set('banksErrorMessage', errorMessage);


export const banksReducer = (state = initialState, action) =>
	produce(state, () => {
		switch (action.type) {
			case bankTypes.REQUEST_FETCH_BANKS:
				return fetchBanks(state, action);
			case bankTypes.SUCCESS_FETCH_BANKS:
				return successFetchBanks(state, action);
			case bankTypes.FAILURE_FETCH_BANKS:
				return failureFetchBanks(state, action);
			default:
				return state;
		}
	});
