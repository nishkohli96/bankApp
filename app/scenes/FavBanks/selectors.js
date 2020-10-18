import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectExampleDomain = state =>
	(state.example || initialState).toJS();

export const selectBanks = () =>
	createSelector(selectExampleDomain, substate =>
		get(substate, 'banks', null)
	);

export const selectBanksIsLoading = () =>
	createSelector(selectExampleDomain, substate =>
		get(substate, 'banksIsLoading', null)
	);

export const selectBanksErrorMessage = () =>
	createSelector(selectExampleDomain, substate =>
		get(substate, 'banksErrorMessage', null)
	);
