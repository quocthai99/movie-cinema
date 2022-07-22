import HomeLayout from './../components/Layout/HomeLayout';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Login from '../pages/Login';

const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login, layout: null },
]


const privateRoutes = [

]

export { publicRoutes, privateRoutes }