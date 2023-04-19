const HomeRoutes = {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/MainLayout.vue'),
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        }
    ]
};

export default HomeRoutes;