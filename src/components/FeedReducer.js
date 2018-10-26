import { handleActions } from 'redux-actions';
import { GET_FEED_DATA_SUCCEEDED } from './FeedTypes';

const initialState = {
    posts: []
};

const FeedReducer = handleActions(
    {
        [GET_FEED_DATA_SUCCEEDED]: (state, action) => ({
            ...state,
            posts: action.data
        })
    },
    initialState
);

export default FeedReducer;