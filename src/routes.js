import Post from './components/post.vue'
import Home from './components/home.vue'
import Markdown from './components/markdownModal.vue'
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'post',
        path: encodeURI('/пост'),
        component: Post
    },
    {
        name: 'markdown',
        path: '/create',
        component: Markdown
    },
];