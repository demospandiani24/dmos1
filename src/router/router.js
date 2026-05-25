import { createBrowserRouter } from 'react-router';
import Home from '@/pages';
import NotFound from '@/pages/not-found';

export const PATHS = {
    INDEX: '/',
    TIMEACTIVE: '/live'
};

const router = createBrowserRouter([
    {
        path: PATHS.INDEX,
        element: <NotFound />
    },

    {
        path: PATHS.TIMEACTIVE,
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
