import Vue from 'vue'
import VueRoter from 'vue-router'

Vue.use(VueRoter)

const Home = () =>
    import ('views/home/Home');
const Category = () =>
    import ('views/cotegory/Category');
const Cart = () =>
    import ('views/cart/Cart');
const Profile = () =>
    import ('views/profile/Profile');


const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/Profile',
    component: Profile
}, ]

const router = new VueRoter({
    routes,
    mode: 'history'

})


export default router