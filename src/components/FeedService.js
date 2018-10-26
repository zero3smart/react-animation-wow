import axios from 'axios';

export default {
    fetchPosts: () => {
        return axios.get('data/posts.json');
    }
};