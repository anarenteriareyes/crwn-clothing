import { takeLatest, call, put, all } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
    // asynchronous call to API:
    try {
        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch (error) {
        yield put(fetchCollectionsFailure(error))
    }

    /**
     * The equivalent in thunk: 
        collectionRef.get().then(snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error)))
    */
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}


export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}

/**
 * Saga Effects:
 *  takeEvery: listen to every action of especific type that we passed to it
 *  call: A method that allow us to call a function, takes as an arg 1: the function to be called 2: the arguments to pass that function
 *  put: saga effect for create actions (like dispatch in thunk )
 */