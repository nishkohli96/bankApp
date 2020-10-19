import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectBankDomain = state => (state.bank || initialState).toJS();

export const getBanks = () =>
	createSelector(selectBankDomain, substate =>
		get(substate, 'banksList', null)
	);
