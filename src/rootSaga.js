import { all } from 'redux-saga/effects';
import feedSaga from './components/FeedSaga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        feedSaga()
    ]);
}