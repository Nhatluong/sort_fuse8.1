import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        translate: 'NAV.DASHBOARD',
        type: 'item',
        icon: 'dashboard',
        url: '/dashboard',
    },
    {
        id: 'vendors',
        title: 'Vendors',
        type: 'item',
        icon: 'dashboard',
        url: '/vendors'
    },
    {
        id: 'site-management',
        title: 'Site Management',
        translate: 'NAV.SITE_MANAGEMENT',
        type: 'item',
        icon: 'business',
        url: '/site-management',
    },
    {
        id      : 'admin',
        title   : 'Admin',
        type    : 'collapsable',
        icon    : 'apps',
        children: [
            {
                id   : 'users',
                title: 'Users',
                type : 'item',
                icon : 'person',
                url  : '/apps/dashboards/analytics'
            },
            {
                id   : 'payments',
                title: 'Payments',
                type : 'item',
                icon : 'attach_money',
                url  : '/apps/academy'
            }
        ]
    },

    // {
    //     id: 'applications',
    //     title: 'Applications',
    //     translate: 'NAV.APPLICATIONS',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'site-management',
    //             title: 'Site Management',
    //             translate: 'NAV.SITE_MANAGEMENT.TITLE',
    //             type: 'item',
    //             icon: 'business',
    //             url: '/site-management',
    //         },
    //     ],
    // },
];
