import type { NavigationTree } from '@/@types/navigation'
import { NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_TITLE } from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import {
    ACTORS_PREFIX_PATH,
    AUTH_PREFIX_PATH,
    CONCEPTS_PREFIX_PATH,
    DASHBOARDS_PREFIX_PATH,
    GUIDE_PREFIX_PATH, UI_COMPONENTS_PREFIX_PATH
} from '@/constants/route.constant'

const navigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '',
        title: 'Dashboard',
        translateKey: 'nav.dashboard.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            {
                key: 'dashboard.ecommerce',
                path: `${DASHBOARDS_PREFIX_PATH}/ecommerce`,
                title: 'Ecommerce',
                translateKey: 'nav.dashboard.ecommerce',
                icon: 'dashboardEcommerce',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.project',
                path: `${DASHBOARDS_PREFIX_PATH}/project`,
                title: 'Project',
                translateKey: 'nav.dashboard.project',
                icon: 'dashboardProject',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.marketing',
                path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
                title: 'Marketing',
                translateKey: 'nav.dashboard.marketing',
                icon: 'dashboardMarketing',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.analytic',
                path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
                title: 'Analytic',
                translateKey: 'nav.dashboard.analytic',
                icon: 'dashboardAnalytic',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
        ],
    },
    {
        key: 'actor',
        path: '',
        title: 'Actor',
        translateKey: 'nav.actor.playground',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            {
                key: 'actor.playground',
                path: `${ACTORS_PREFIX_PATH}/playground`,
                title: 'Playground',
                translateKey: 'nav.actor.playground',
                icon: 'dashboardEcommerce',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
        ],
    },
    {
        key: 'concepts',
        path: '',
        title: 'Concepts',
        translateKey: 'nav.concepts',
        icon: 'concepts',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4,
            },
        },
        subMenu: [
            {
                key: 'concepts.ai',
                path: '',
                title: 'AI',
                translateKey: 'nav.conceptsAi.ai',
                icon: 'ai',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.ai.chat',
                        path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
                        title: 'Chat',
                        translateKey: 'nav.conceptsAi.chat',
                        icon: 'aiChat',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.chatDesc',
                                label: 'AI-powered chat systems',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.ai.image',
                        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
                        title: 'Image',
                        translateKey: 'nav.conceptsAi.image',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.projects',
                path: '',
                title: 'Projects',
                translateKey: 'nav.conceptsProjects.projects',
                icon: 'projects',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProjects.projectsDesc',
                        label: 'Manage and track projects',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.projects.scrumBoard',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
                        title: 'Scrum Board',
                        translateKey: 'nav.conceptsProjects.scrumBoard',
                        icon: 'projectScrumBoard',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.scrumBoardDesc',
                                label: 'Manage your scrum workflow',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectList',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
                        title: 'Project List',
                        translateKey: 'nav.conceptsProjects.projectList',
                        icon: 'projectList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectListDesc',
                                label: 'Organize all projects',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/27`,
                        title: 'Details',
                        translateKey: 'nav.conceptsProjects.projectDetails',
                        icon: 'projectDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectDetailsDesc',
                                label: 'Project detailed information',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectTasks',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
                        title: 'Tasks',
                        translateKey: 'nav.conceptsProjects.projectTasks',
                        icon: 'projectTask',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectTasksDesc',
                                label: 'Manage project tasks',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectIssue',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/1`,
                        title: 'Issue',
                        translateKey: 'nav.conceptsProjects.projectIssue',
                        icon: 'projectIssue',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectIssueDesc',
                                label: 'Resolve project issues',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.customers',
                path: '',
                title: 'Customers',
                translateKey: 'nav.conceptsCustomers.customers',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomers.customersDesc',
                        label: 'Customer management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customers.customerList',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
                        title: 'Customer List',
                        translateKey: 'nav.conceptsCustomers.customerList',
                        icon: 'customerList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerListDesc',
                                label: 'List of all customers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/1`,
                        title: 'Customer Edit',
                        translateKey: 'nav.conceptsCustomers.customerEdit',
                        icon: 'customerEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerEditDesc',
                                label: 'Edit customer info',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
                        title: 'Customer Create',
                        translateKey: 'nav.conceptsCustomers.customerCreate',
                        icon: 'customerCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerCreateDesc',
                                label: 'Add a new customer',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/1`,
                        title: 'Customer Details',
                        translateKey: 'nav.conceptsCustomers.customerDetails',
                        icon: 'customerDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerDetailsDesc',
                                label: 'Detailed customer info',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.products',
                path: '',
                title: 'Products',
                translateKey: 'nav.conceptsProducts.products',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProducts.productsDesc',
                        label: 'Product inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.products.productList',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
                        title: 'Product List',
                        translateKey: 'nav.conceptsProducts.productList',
                        icon: 'productList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productListDesc',
                                label: 'All products listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.products.productEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/12`,
                        title: 'Product Edit',
                        translateKey: 'nav.conceptsProducts.productEdit',
                        icon: 'productEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productEditDesc',
                                label: 'Edit product details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.products.productCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
                        title: 'Product Create',
                        translateKey: 'nav.conceptsProducts.productCreate',
                        icon: 'productCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productCreateDesc',
                                label: 'Add new product',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.orders',
                path: '',
                title: 'Orders',
                translateKey: 'nav.conceptsOrders.orders',
                icon: 'orders',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsOrders.ordersDesc',
                        label: 'Customer orders management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.orders.orderList',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
                        title: 'Order List',
                        translateKey: 'nav.conceptsOrders.orderList',
                        icon: 'orderList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderListDesc',
                                label: 'View all customer orders',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/95954`,
                        title: 'Order Edit',
                        translateKey: 'nav.conceptsOrders.orderEdit',
                        icon: 'orderEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderEditDesc',
                                label: 'Edit order details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
                        title: 'Order Create',
                        translateKey: 'nav.conceptsOrders.orderCreate',
                        icon: 'orderCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderCreateDesc',
                                label: 'Create new order',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/95954`,
                        title: 'Order Details',
                        translateKey: 'nav.conceptsOrders.orderDetails',
                        icon: 'ordeDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderDetailsDesc',
                                label: 'Detailed order information',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.account',
                path: '',
                title: 'Account',
                translateKey: 'nav.conceptsAccount.account',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAccount.accountDesc',
                        label: 'Account settings and info',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.account.settings',
                        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
                        title: 'Settings',
                        translateKey: 'nav.conceptsAccount.settings',
                        icon: 'accountSettings',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.settingsDesc',
                                label: 'Configure your settings',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.activityLog',
                        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
                        title: 'Activity log',
                        translateKey: 'nav.conceptsAccount.activityLog',
                        icon: 'accountActivityLogs',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.activityLogDesc',
                                label: 'View recent activities',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.rolesPermissions',
                        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
                        title: 'Roles & Permissions',
                        translateKey: 'nav.conceptsAccount.rolesPermissions',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.rolesPermissionsDesc',
                                label: 'Manage roles & permissions',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.pricing',
                        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
                        title: 'Pricing',
                        translateKey: 'nav.conceptsAccount.pricing',
                        icon: 'accountPricing',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAccount.pricingDesc',
                                label: 'View pricing plans',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.helpCenter',
                path: '',
                title: 'Help Center',
                translateKey: 'nav.conceptsHelpCenter.helpCenter',
                icon: 'helpCenter',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsHelpCenter.helpCenterDesc',
                        label: 'Support and articles',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.helpCenter.supportHub',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
                        title: 'Support Hub',
                        translateKey: 'nav.conceptsHelpCenter.supportHub',
                        icon: 'helpCeterSupportHub',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.supportHubDesc',
                                label: 'Central support hub',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.article',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/pWBKE_0UiQ`,
                        title: 'Article',
                        translateKey: 'nav.conceptsHelpCenter.article',
                        icon: 'helpCeterArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.articleDesc',
                                label: 'Read support articles',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.editArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/pWBKE_0UiQ`,
                        title: 'Edit Article',
                        translateKey: 'nav.conceptsHelpCenter.editArticle',
                        icon: 'helpCeterEditArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.editArticleDesc',
                                label: 'Modify article content',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.manageArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
                        title: 'Manage Article',
                        translateKey: 'nav.conceptsHelpCenter.manageArticle',
                        icon: 'helpCeterManageArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.manageArticleDesc',
                                label: 'Article management',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.calendar',
                path: `${CONCEPTS_PREFIX_PATH}/calendar`,
                title: 'Calendar',
                translateKey: 'nav.calendar',
                icon: 'calendar',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.calendarDesc',
                        label: 'Schedule and events',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.fileManager',
                path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
                title: 'File Manager',
                translateKey: 'nav.fileManager',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.fileManagerDesc',
                        label: 'Manage your files',
                    },
                },
                subMenu: [],
            },


            {
                key: 'concepts.flowManager',
                path: `${CONCEPTS_PREFIX_PATH}/flow-manager`,
                title: 'Flow Manager',
                translateKey: 'nav.flowManager',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.flowManagerDesc',
                        label: 'Manage your flows',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.mail',
                path: `${CONCEPTS_PREFIX_PATH}/mail`,
                title: 'Mail',
                translateKey: 'nav.mail',
                icon: 'mail',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.mailDesc',
                        label: 'Manage your emails',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.chat',
                path: `${CONCEPTS_PREFIX_PATH}/chat`,
                title: 'Chat',
                translateKey: 'nav.chat',
                icon: 'chat',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.chatDesc',
                        label: 'Chat with friends',
                    },
                },
                subMenu: [],
            },
        ],
    },
    {
        key: 'uiComponent',
        path: '',
        title: 'Ui Component',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'tabs',
                columns: 2,
            },
        },
        subMenu: [
            {
                key: 'uiComponent.common',
                path: '',
                title: 'Common',
                translateKey: 'nav.uiComponentsCommon.common',
                icon: 'common',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsCommon.commonDesc',
                        label: 'Common UI elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.common.button',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/button`,
                        title: 'Button',
                        translateKey: 'nav.uiComponentsCommon.button',
                        icon: 'uiCommonButton',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.buttonDesc',
                                label: 'Interactive buttons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.grid',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/grid`,
                        title: 'Grid',
                        translateKey: 'nav.uiComponentsCommon.grid',
                        icon: 'uiCommonGrid',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsCommon.gridDesc',
                                label: 'Layout grid system',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.typography',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/typography`,
                        title: 'Typography',
                        translateKey: 'nav.uiComponentsCommon.typography',
                        icon: 'uiCommonTypography',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.typographyDesc',
                                label: 'Text styling tools',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.icons',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/icons`,
                        title: 'Icons',
                        translateKey: 'nav.uiComponentsCommon.icons',
                        icon: 'uiCommonIcons',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.iconsDesc',
                                label: 'Visual icon set',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.feedback',
                path: '',
                title: 'Feedback',
                translateKey: 'nav.uiComponentsFeedback.feedback',
                icon: 'feedback',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsFeedback.feedbackDesc',
                        label: 'User feedback components',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.feedback.alert',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/alert`,
                        title: 'Alert',
                        translateKey: 'nav.uiComponentsFeedback.alert',
                        icon: 'uiFeedbackAlert',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.alertDesc',
                                label: 'Notification alerts',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.dialog',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/dialog`,
                        title: 'Dialog',
                        translateKey: 'nav.uiComponentsFeedback.dialog',
                        icon: 'uiFeedbackDialog',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.dialogDesc',
                                label: 'Modal dialog boxes',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.drawer',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/drawer`,
                        title: 'Drawer',
                        translateKey: 'nav.uiComponentsFeedback.drawer',
                        icon: 'uiFeedbackDrawer',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.drawerDesc',
                                label: 'Sidebar drawers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.progress',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/progress`,
                        title: 'Progress',
                        translateKey: 'nav.uiComponentsFeedback.progress',
                        icon: 'uiFeedbackProgress',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.progressDesc',
                                label: 'Progress indicators',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.skeleton',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/skeleton`,
                        title: 'Skeleton',
                        translateKey: 'nav.uiComponentsFeedback.skeleton',
                        icon: 'uiFeedbackSkeleton',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.skeletonDesc',
                                label: 'Loading skeletons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.spinner',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/spinner`,
                        title: 'Spinner',
                        translateKey: 'nav.uiComponentsFeedback.spinner',
                        icon: 'uiFeedbackSpinner',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.spinnerDesc',
                                label: 'Loading spinners',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.toast',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/toast`,
                        title: 'Toast',
                        translateKey: 'nav.uiComponentsFeedback.toast',
                        icon: 'uiFeedbackToast',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.toastDesc',
                                label: 'Toast notifications',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.dataDisplay',
                path: '',
                title: 'Data Display',
                translateKey: 'nav.uiComponentsDataDisplay.dataDisplay',
                icon: 'dataDisplay',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey:
                            'nav.uiComponentsDataDisplay.dataDisplayDesc',
                        label: 'Components for showing data',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.dataDisplay.avatar',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/avatar`,
                        title: 'Avatar',
                        translateKey: 'nav.uiComponentsDataDisplay.avatar',
                        icon: 'uiDataDisplayAvatar',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.avatarDesc',
                                label: 'User profile pictures',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.badge',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/badge`,
                        title: 'Badge',
                        translateKey: 'nav.uiComponentsDataDisplay.badge',
                        icon: 'uiDataDisplayBadge',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.badgeDesc',
                                label: 'Status indicators',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.calendar',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/calendar`,
                        title: 'Calendar',
                        translateKey: 'nav.uiComponentsDataDisplay.calendar',
                        icon: 'uiDataDisplayCalendar',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.calendarDesc',
                                label: 'Date selectors',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.cards',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/cards`,
                        title: 'Cards',
                        translateKey: 'nav.uiComponentsDataDisplay.cards',
                        icon: 'uiDataDisplayCard',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.cardsDesc',
                                label: 'Content cards',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.table',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/table`,
                        title: 'Table',
                        translateKey: 'nav.uiComponentsDataDisplay.table',
                        icon: 'uiDataDisplayTable',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tableDesc',
                                label: 'Data tables',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.tag',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tag`,
                        title: 'Tag',
                        translateKey: 'nav.uiComponentsDataDisplay.tag',
                        icon: 'uiDataDisplayTag',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tagDesc',
                                label: 'Label tags',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.timeline',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/timeline`,
                        title: 'Timeline',
                        translateKey: 'nav.uiComponentsDataDisplay.timeline',
                        icon: 'uiDataDisplayTimeline',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.timelineDesc',
                                label: 'Event timelines',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.tooltip',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tooltip`,
                        title: 'Tooltip',
                        translateKey: 'nav.uiComponentsDataDisplay.tooltip',
                        icon: 'uiDataDisplayTooltip',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tooltipDesc',
                                label: 'Hover tooltips',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.forms',
                path: '',
                title: 'Forms',
                translateKey: 'nav.uiComponentsForms.forms',
                icon: 'forms',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsForms.formsDesc',
                        label: 'Form elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.forms.checkbox',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/checkbox`,
                        title: 'Checkbox',
                        translateKey: 'nav.uiComponentsForms.checkbox',
                        icon: 'uiFormsCheckbox',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.checkboxDesc',
                                label: 'Tickable checkboxes',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.datePicker',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/date-picker`,
                        title: 'Date picker',
                        translateKey: 'nav.uiComponentsForms.datePicker',
                        icon: 'uiFormsDatepicker',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.datePickerDesc',
                                label: 'Select dates',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.formControl',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/form-control`,
                        title: 'Form control',
                        translateKey: 'nav.uiComponentsForms.formControl',
                        icon: 'uiFormsFormControl',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.formControlDesc',
                                label: 'Form control elements',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.input',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/input`,
                        title: 'Input',
                        translateKey: 'nav.uiComponentsForms.input',
                        icon: 'uiFormsInput',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsForms.inputDesc',
                                label: 'Text inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.inputGroup',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/input-group`,
                        title: 'Input Group',
                        translateKey: 'nav.uiComponentsForms.inputGroup',
                        icon: 'uiFormsInputGroup',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.inputGroupDesc',
                                label: 'Grouped inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.radio',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/radio`,
                        title: 'Radio',
                        translateKey: 'nav.uiComponentsForms.radio',
                        icon: 'uiFormsRadio',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsForms.radioDesc',
                                label: 'Radio buttons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.segment',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/segment`,
                        title: 'Segment',
                        translateKey: 'nav.uiComponentsForms.segment',
                        icon: 'uiFormsSegment',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.segmentDesc',
                                label: 'Input segments',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.select',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/select`,
                        title: 'Select',
                        translateKey: 'nav.uiComponentsForms.select',
                        icon: 'uiFormsSelect',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.selectDesc',
                                label: 'Dropdown selects',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.switcher',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/switcher`,
                        title: 'Switcher',
                        translateKey: 'nav.uiComponentsForms.switcher',
                        icon: 'uiFormsSwitcher',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.switcherDesc',
                                label: 'Toggle switches',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.timeInput',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/time-input`,
                        title: 'Time Input',
                        translateKey: 'nav.uiComponentsForms.timeInput',
                        icon: 'uiFormsTimePicker',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.timeInputDesc',
                                label: 'Time inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.upload',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/upload`,
                        title: 'Upload',
                        translateKey: 'nav.uiComponentsForms.upload',
                        icon: 'uiFormsUpload',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.uploadDesc',
                                label: 'File uploaders',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.navigation',
                path: '',
                title: 'Navigation',
                translateKey: 'nav.uiComponentsNavigation.navigation',
                icon: 'navigation',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey:
                            'nav.uiComponentsNavigation.navigationDesc',
                        label: 'Navigation elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.navigation.dropdown',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/dropdown`,
                        title: 'Dropdown',
                        translateKey: 'nav.uiComponentsNavigation.dropdown',
                        icon: 'uiNavigationDropdown',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.dropdownDesc',
                                label: 'Dropdown menus',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.menu',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/menu`,
                        title: 'Menu',
                        translateKey: 'nav.uiComponentsNavigation.menu',
                        icon: 'uiNavigationMenu',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.menuDesc',
                                label: 'Menu navigation',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.pagination',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/pagination`,
                        title: 'Pagination',
                        translateKey: 'nav.uiComponentsNavigation.pagination',
                        icon: 'uiNavigationPagination',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.paginationDesc',
                                label: 'Pagination controls',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.steps',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/steps`,
                        title: 'Steps',
                        translateKey: 'nav.uiComponentsNavigation.steps',
                        icon: 'uiNavigationSteps',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.stepsDesc',
                                label: 'Sequential steps',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.tabs',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tabs`,
                        title: 'Tabs',
                        translateKey: 'nav.uiComponentsNavigation.tabs',
                        icon: 'uiNavigationTabs',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.tabsDesc',
                                label: 'Tab navigation',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.graph',
                path: '',
                title: 'Graph',
                translateKey: 'nav.uiComponentsGraph.graph',
                icon: 'graph',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsGraph.graphDesc',
                        label: 'Graphical elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.graph.charts',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/charts`,
                        title: 'Charts',
                        translateKey: 'nav.uiComponentsGraph.charts',
                        icon: 'uiGraphChart',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsGraph.chartsDesc',
                                label: 'Various charts',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.graph.maps',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/maps`,
                        title: 'Maps',
                        translateKey: 'nav.uiComponentsGraph.maps',
                        icon: 'uiGraphMaps',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsGraph.mapsDesc',
                                label: 'Geographic maps',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
        ],
    },
    {
        key: 'authentication',
        path: '',
        title: 'Authentication',
        translateKey: 'nav.authentication.authentication',
        icon: 'authentication',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            {
                key: 'authentication.signIn',
                path: '',
                title: 'Sign In',
                translateKey: 'nav.authentication.signIn',
                icon: 'signIn',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'authentication.signInSimple',
                        path: `${AUTH_PREFIX_PATH}/sign-in-simple`,
                        title: 'Simple',
                        translateKey: 'nav.authentication.signInSimple',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.signInSide',
                        path: `${AUTH_PREFIX_PATH}/sign-in-side`,
                        title: 'Side',
                        translateKey: 'nav.authentication.signInSide',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.signInSplit',
                        path: `${AUTH_PREFIX_PATH}/sign-in-split`,
                        title: 'Split',
                        translateKey: 'nav.authentication.signInSplit',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'authentication.signUp',
                path: '',
                title: 'Sign Up',
                translateKey: 'nav.authentication.signUp',
                icon: 'signUp',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'authentication.signUpSimple',
                        path: `${AUTH_PREFIX_PATH}/sign-up-simple`,
                        title: 'Simple',
                        translateKey: 'nav.authentication.signUpSimple',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.signUpSide',
                        path: `${AUTH_PREFIX_PATH}/sign-up-side`,
                        title: 'Side',
                        translateKey: 'nav.authentication.signUpSide',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.signUpSplit',
                        path: `${AUTH_PREFIX_PATH}/sign-up-split`,
                        title: 'Split',
                        translateKey: 'nav.authentication.signUpSplit',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'authentication.forgotPassword',
                path: '',
                title: 'Forgot Password',
                translateKey: 'nav.authentication.forgotPassword',
                icon: 'forgotPassword',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'authentication.forgotPasswordSimple',
                        path: `${AUTH_PREFIX_PATH}/forgot-password-simple`,
                        title: 'Simple',
                        translateKey: 'nav.authentication.forgotPasswordSimple',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.forgotPasswordSide',
                        path: `${AUTH_PREFIX_PATH}/forgot-password-side`,
                        title: 'Side',
                        translateKey: 'nav.authentication.forgotPasswordSide',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.forgotPasswordSplit',
                        path: `${AUTH_PREFIX_PATH}/forgot-password-split`,
                        title: 'Split',
                        translateKey: 'nav.authentication.forgotPasswordSplit',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'authentication.resetPassword',
                path: '',
                title: 'Reset Password',
                translateKey: 'nav.authentication.resetPassword',
                icon: 'resetPassword',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'authentication.resetPasswordSimple',
                        path: `${AUTH_PREFIX_PATH}/reset-password-simple`,
                        title: 'Simple',
                        translateKey: 'nav.authentication.resetPasswordSimple',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.resetPasswordSide',
                        path: `${AUTH_PREFIX_PATH}/reset-password-side`,
                        title: 'Side',
                        translateKey: 'nav.authentication.resetPasswordSide',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.resetPasswordSplit',
                        path: `${AUTH_PREFIX_PATH}/reset-password-split`,
                        title: 'Split',
                        translateKey: 'nav.authentication.resetPasswordSplit',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'authentication.otpVerification',
                path: '',
                title: 'Otp Verification',
                translateKey: 'nav.authentication.otpVerification',
                icon: 'otpVerification',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'authentication.otpVerificationSimple',
                        path: `${AUTH_PREFIX_PATH}/otp-verification-simple`,
                        title: 'Simple',
                        translateKey:
                            'nav.authentication.otpVerificationSimple',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.otpVerificationSide',
                        path: `${AUTH_PREFIX_PATH}/otp-verification-side`,
                        title: 'Side',
                        translateKey: 'nav.authentication.otpVerificationSide',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'authentication.otpVerificationSplit',
                        path: `${AUTH_PREFIX_PATH}/otp-verification-split`,
                        title: 'Split',
                        translateKey: 'nav.authentication.otpVerificationSplit',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
    {
        key: 'others',
        path: '',
        title: 'Others',
        translateKey: 'nav.others.others',
        icon: 'others',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'others.accessDenied',
                path: `/access-denied`,
                title: 'Access Denied',
                translateKey: 'nav.others.accessDenied',
                icon: 'accessDenied',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.others.accessDeniedDesc',
                        label: 'Access denied page',
                    },
                },
                subMenu: [],
            },
            {
                key: 'others.landing',
                path: `/landing`,
                title: 'Landing',
                translateKey: 'nav.others.landing',
                icon: 'landing',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.others.landingDesc',
                        label: 'Shared component usage',
                    },
                },
                subMenu: [],
            },
        ],
    },
    {
        key: 'guide',
        path: '',
        title: 'Guide',
        translateKey: 'nav.guide.guide',
        icon: 'guide',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'guide.documentation',
                path: `${GUIDE_PREFIX_PATH}/documentation/introduction`,
                title: 'Documentation',
                translateKey: 'nav.guide.documentation',
                icon: 'documentation',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.guide.documentationDesc',
                        label: 'General template guide',
                    },
                },
                subMenu: [],
            },
            {
                key: 'guide.sharedComponentDoc',
                path: `${GUIDE_PREFIX_PATH}/shared-component-doc/abbreviate-number`,
                title: 'Shared Component',
                translateKey: 'nav.guide.sharedComponentDoc',
                icon: 'sharedComponentDoc',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.guide.sharedComponentDocDesc',
                        label: 'Shared component usage',
                    },
                },
                subMenu: [],
            },
            {
                key: 'guide.utilsDoc',
                path: `${GUIDE_PREFIX_PATH}/utils-doc/use-auth`,
                title: 'Utilities',
                translateKey: 'nav.guide.utilsDoc',
                icon: 'utilsDoc',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.guide.utilsDocDesc',
                        label: 'Docs about utilities function',
                    },
                },
                subMenu: [],
            },
            {
                key: 'guide.changeLog',
                path: `${GUIDE_PREFIX_PATH}/changelog`,
                title: 'Changelog',
                translateKey: 'nav.guide.changeLog',
                icon: 'changeLog',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.guide.changeLogDesc',
                        label: 'All the version records',
                    },
                },
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
