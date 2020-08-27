import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/profile/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/profile'),
        children: [{
                path: '',
                name: 'ProfilePost',
                component: () =>
                    import ( /* webpackChunkName: "profile" */ '../views/profile/post')
            },
            {
                path: 'igtv',
                name: 'ProfileIGTV',
                component: () =>
                    import ( /* webpackChunkName: "profile" */ '../views/profile/igtv')
            },
            {
                path: 'save',
                name: 'ProfileSave',
                component: () =>
                    import ( /* webpackChunkName: "profile" */ '../views/profile/save')
            },
            {
                path: 'tag',
                name: 'ProfileTag',
                component: () =>
                    import ( /* webpackChunkName: "profile" */ '../views/profile/tag')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router