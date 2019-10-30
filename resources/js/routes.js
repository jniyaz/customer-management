
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomersMain from './components/customers/Main.vue';
import CustomersList from './components/customers/List.vue';
import CustomersShow     from './components/customers/Show.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: CustomersList
            },
            {
                path: ':id',
                component: CustomersShow
            },
        ]
    }
]