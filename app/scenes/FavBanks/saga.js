import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { getUser } from 'app/services/UserService';
import { bankActions, bankTypes } from './reducer';

export function* fetchBanks() {
	const response = yield call(getUser);
	if (response.ok) {
		const { data } = response;
		yield put(bankActions.successFetchBanks(get(data, '0')));
	} else {
		yield put(
			bankActions.failureFetchBanks(
				'There was an error while fetching bank information.'
			)
		);
	}
}

export default function* searchListContainerSaga() {
	yield takeLatest(bankTypes.REQUEST_FETCH_BANKS, fetchBanks);
}
