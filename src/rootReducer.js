import { combineReducers } from 'redux';
import feedReducer from './components/FeedReducer';

const reducers = combineReducers({
    feed: feedReducer
});

export default reducers;
