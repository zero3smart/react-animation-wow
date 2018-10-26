import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GET_FEED_DATA, GET_FEED_DATA_SUCCEEDED, GET_FEED_DATA_FAILED } from './FeedTypes';
import FeedService from './FeedService';

function* getFeedDataAsync(action) {
    try {
        const posts = yield call(FeedService.fetchPosts);
        yield put({ type: GET_FEED_DATA_SUCCEEDED, data: posts.data });
    } catch (e) {
        yield put({ type: GET_FEED_DATA_FAILED, message: e.message });
    }
}

export default function* watchCheckPartnerAsync() {
    yield takeEvery(GET_FEED_DATA, getFeedDataAsync);
}

