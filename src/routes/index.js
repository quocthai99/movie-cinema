import HomeLayout from './../components/Layout/HomeLayout';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Login from '../pages/Login';
import DetailMovie from '../pages/DetailMovie';

const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/detail/:id', component: DetailMovie },
    { path: '/login', component: Login, layout: null },
]


const privateRoutes = [

]

export { publicRoutes, privateRoutes }