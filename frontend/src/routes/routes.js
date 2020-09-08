import Games from "./../pages/Games";
import Matches from "./../pages/Matches";
import NotFound from "./../pages/NotFound";
import Login from "./../pages/Login";

const routes = [
    {
        path: '/',
        component: Matches,
    },
    {
        path: '/games',
        component: Games,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export default routes;