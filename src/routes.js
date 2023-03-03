import Post from './components/post.vue'
import Home from './components/home.vue'
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'post',
        path: '/post',
        component: Post
    },
    {
        name: 'admin',
        path: '/post',
        component: Post
    },
];