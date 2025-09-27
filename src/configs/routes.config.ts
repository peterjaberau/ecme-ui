import type { Routes } from '@/@types/routes'
import { lazy } from 'react'
import { ROUTES_CONSTANTS, ROLES_CONSTANTS } from '@/internals/constants'

const { ADMIN, USER} = ROLES_CONSTANTS
const { GUIDE_PREFIX_PATH, AUTH_PREFIX_PATH, DASHBOARDS_PREFIX_PATH, ACTORS_PREFIX_PATH, CONCEPTS_PREFIX_PATH, UI_COMPONENTS_PREFIX_PATH } = ROUTES_CONSTANTS

export const publicRoutes: Routes = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'otpVerification',
        path: `/otp-verification`,
        component: lazy(() => import('@/views/auth/OtpVerification')),
        authority: [],
    },
]


const authDemoRoute: Routes = [
    {
        key: 'authentication.signInSimple',
        path: `${AUTH_PREFIX_PATH}/sign-in-simple`,
        component: lazy(() => import('@/views/auth-demo/SignInDemoSimple')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.signInSide',
        path: `${AUTH_PREFIX_PATH}/sign-in-side`,
        component: lazy(() => import('@/views/auth-demo/SignInDemoSide')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.signInSplit',
        path: `${AUTH_PREFIX_PATH}/sign-in-split`,
        component: lazy(() => import('@/views/auth-demo/SignInDemoSplit')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.signUpSimple',
        path: `${AUTH_PREFIX_PATH}/sign-up-simple`,
        component: lazy(() => import('@/views/auth-demo/SignUpDemoSimple')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.signUpSide',
        path: `${AUTH_PREFIX_PATH}/sign-up-side`,
        component: lazy(() => import('@/views/auth-demo/SignUpDemoSide')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.signUpSplit',
        path: `${AUTH_PREFIX_PATH}/sign-up-split`,
        component: lazy(() => import('@/views/auth-demo/SignUpDemoSplit')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.resetPasswordSimple',
        path: `${AUTH_PREFIX_PATH}/reset-password-simple`,
        component: lazy(
            () => import('@/views/auth-demo/ResetPasswordDemoSimple'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.resetPasswordSide',
        path: `${AUTH_PREFIX_PATH}/reset-password-side`,
        component: lazy(
            () => import('@/views/auth-demo/ResetPasswordDemoSide'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.resetPasswordSplit',
        path: `${AUTH_PREFIX_PATH}/reset-password-split`,
        component: lazy(
            () => import('@/views/auth-demo/ResetPasswordDemoSplit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.forgotPasswordSimple',
        path: `${AUTH_PREFIX_PATH}/forgot-password-simple`,
        component: lazy(
            () => import('@/views/auth-demo/ForgotPasswordDemoSimple'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.forgotPasswordSide',
        path: `${AUTH_PREFIX_PATH}/forgot-password-side`,
        component: lazy(
            () => import('@/views/auth-demo/ForgotPasswordDemoSide'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.forgotPasswordSplit',
        path: `${AUTH_PREFIX_PATH}/forgot-password-split`,
        component: lazy(
            () => import('@/views/auth-demo/ForgotPasswordDemoSplit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.otpVerificationSplit',
        path: `${AUTH_PREFIX_PATH}/otp-verification-split`,
        component: lazy(
            () => import('@/views/auth-demo/OtpVerificationDemoSplit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.otpVerificationSide',
        path: `${AUTH_PREFIX_PATH}/otp-verification-side`,
        component: lazy(
            () => import('@/views/auth-demo/OtpVerificationDemoSide'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'authentication.otpVerificationSimple',
        path: `${AUTH_PREFIX_PATH}/otp-verification-simple`,
        component: lazy(
            () => import('@/views/auth-demo/OtpVerificationDemoSimple'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
]

const dashboardsRoute: Routes = [
    {
        key: 'dashboard.ecommerce',
        path: `${DASHBOARDS_PREFIX_PATH}/ecommerce`,
        component: lazy(() => import('@/views/dashboards/EcommerceDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.project',
        path: `${DASHBOARDS_PREFIX_PATH}/project`,
        component: lazy(() => import('@/views/dashboards/ProjectDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.marketing',
        path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
        component: lazy(() => import('@/views/dashboards/MarketingDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.analytic',
        path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
        component: lazy(() => import('@/views/dashboards/AnalyticDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

const actorsRoute: Routes = [
    {
        key: 'actor.playground',
        path: `${ACTORS_PREFIX_PATH}/playground`,
        component: lazy(() => import('@/views/actors/playground')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'default', // 'default' | 'gutterless' | 'contained'
            pageBackgroundType: 'default', //default | plain
        },
    },
]

const conceptsRoute: Routes = [
    {
        key: 'concepts.ai.chat',
        path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
        component: lazy(() => import('@/views/concepts/ai/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'concepts.ai.image',
        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
        component: lazy(() => import('@/views/concepts/ai/Image')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },

    {
        key: 'concepts.customers.customerList',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.customers.customerEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit customer',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create customer',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.products.productList',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(() => import('@/views/concepts/products/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.products.productEdit',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/:id`,
        component: lazy(() => import('@/views/concepts/products/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit product',
                description:
                    'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productCreate',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
        component: lazy(
            () => import('@/views/concepts/products/ProductCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create product',
                description:
                    'Quickly add products to your inventory. Enter key details, manage stock, and set availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.projects.scrumBoard',
        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
        component: lazy(() => import('@/views/concepts/projects/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectList',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
        component: lazy(() => import('@/views/concepts/projects/ProjectList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectDetails',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/:id`,
        component: lazy(
            () => import('@/views/concepts/projects/ProjectDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectTasks',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
        component: lazy(() => import('@/views/concepts/projects/Tasks')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectIssue',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/:id`,
        component: lazy(() => import('@/views/concepts/projects/Issue')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderList',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
        component: lazy(() => import('@/views/concepts/orders/OrderList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderEdit',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit order',
                contained: true,
                description: 'Manage and track orders efficiently',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
        component: lazy(() => import('@/views/concepts/orders/OrderCreate')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create order',
                contained: true,
                description:
                    'Create new customer orders quickly and accurately',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderDetails',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderDetails')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                contained: true,
                title: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeader'
                            ),
                ),
                extraHeader: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeaderExtra'
                            ),
                ),
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.settings',
        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
        component: lazy(() => import('@/views/concepts/accounts/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Settings',
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.activityLog',
        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
        component: lazy(() => import('@/views/concepts/accounts/ActivityLog')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.rolesPermissions',
        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
        component: lazy(
            () => import('@/views/concepts/accounts/RolesPermissions'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.account.pricing',
        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
        component: lazy(() => import('@/views/concepts/accounts/Pricing')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.helpCenter.supportHub',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
        component: lazy(
            () => import('@/views/concepts/help-center/SupportHub'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.article',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/:id`,
        component: lazy(() => import('@/views/concepts/help-center/Article')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.editArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/:id`,
        component: lazy(
            () => import('@/views/concepts/help-center/EditArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.helpCenter.manageArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
        component: lazy(
            () => import('@/views/concepts/help-center/ManageArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.calendar',
        path: `${CONCEPTS_PREFIX_PATH}/calendar`,
        component: lazy(() => import('@/views/concepts/calendar/Calendar')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.fileManager',
        path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
        component: lazy(() => import('@/views/concepts/files/FileManager')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },

    {
        key: 'concepts.mail',
        path: `${CONCEPTS_PREFIX_PATH}/mail`,
        component: lazy(() => import('@/views/concepts/mail/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.chat',
        path: `${CONCEPTS_PREFIX_PATH}/chat`,
        component: lazy(() => import('@/views/concepts/chat/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

const othersRoute: Routes = [
    {
        key: 'accessDenied',
        path: `/access-denied`,
        component: lazy(
            () => import('@/views/others/AccessDenied'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'landing',
        path: `/landing`,
        component: lazy(
            () => import('@/views/others/Landing'),
        ),
        authority: [ADMIN, USER],
        meta: {
            layout: 'blank',
            footer: false,
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
]

const guideRoute: Routes = [
    {
        key: 'guide.documentation',
        path: `${GUIDE_PREFIX_PATH}/documentation/*`,
        component: lazy(() => import('@/views/guide/Documentations')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'guide.sharedComponentDoc',
        path: `${GUIDE_PREFIX_PATH}/shared-component-doc/*`,
        component: lazy(() => import('@/views/guide/SharedComponentsDoc')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'guide.utilsDoc',
        path: `${GUIDE_PREFIX_PATH}/utils-doc/*`,
        component: lazy(() => import('@/views/guide/UtilsDoc')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'guide.changelog',
        path: `${GUIDE_PREFIX_PATH}/changelog`,
        component: lazy(() => import('@/views/guide/ChangeLog')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
]

const uiComponentsRoute: Routes = [
    {
        key: 'uiComponent.ark.accordion',
        path: `${UI_COMPONENTS_PREFIX_PATH}/accordion`,
        component: lazy(() => import('@/views/ui-components/ark/Accordion')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.ark.floating-panel',
        path: `${UI_COMPONENTS_PREFIX_PATH}/floating-panel`,
        component: lazy(() => import('@/views/ui-components/ark/FloatingPanel')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.common.button',
        path: `${UI_COMPONENTS_PREFIX_PATH}/button`,
        component: lazy(() => import('@/views/ui-components/common/Button')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.common.grid',
        path: `${UI_COMPONENTS_PREFIX_PATH}/grid`,
        component: lazy(() => import('@/views/ui-components/common/Grid')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.common.typography',
        path: `${UI_COMPONENTS_PREFIX_PATH}/typography`,
        component: lazy(
            () => import('@/views/ui-components/common/Typography'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.common.icons',
        path: `${UI_COMPONENTS_PREFIX_PATH}/icons`,
        component: lazy(() => import('@/views/ui-components/common/Icons')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.alert',
        path: `${UI_COMPONENTS_PREFIX_PATH}/alert`,
        component: lazy(() => import('@/views/ui-components/feedback/Alert')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.dialog',
        path: `${UI_COMPONENTS_PREFIX_PATH}/dialog`,
        component: lazy(() => import('@/views/ui-components/feedback/Dialog')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.drawer',
        path: `${UI_COMPONENTS_PREFIX_PATH}/drawer`,
        component: lazy(() => import('@/views/ui-components/feedback/Drawer')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.progress',
        path: `${UI_COMPONENTS_PREFIX_PATH}/progress`,
        component: lazy(
            () => import('@/views/ui-components/feedback/Progress'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.skeleton',
        path: `${UI_COMPONENTS_PREFIX_PATH}/skeleton`,
        component: lazy(
            () => import('@/views/ui-components/feedback/Skeleton'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.spinner',
        path: `${UI_COMPONENTS_PREFIX_PATH}/spinner`,
        component: lazy(() => import('@/views/ui-components/feedback/Spinner')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.feedback.toast',
        path: `${UI_COMPONENTS_PREFIX_PATH}/toast`,
        component: lazy(() => import('@/views/ui-components/feedback/Toast')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.avatar',
        path: `${UI_COMPONENTS_PREFIX_PATH}/avatar`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Avatar'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.badge',
        path: `${UI_COMPONENTS_PREFIX_PATH}/badge`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Badge'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.calendar',
        path: `${UI_COMPONENTS_PREFIX_PATH}/calendar`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Calendar'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.cards',
        path: `${UI_COMPONENTS_PREFIX_PATH}/cards`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Cards'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.table',
        path: `${UI_COMPONENTS_PREFIX_PATH}/table`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Table'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.tag',
        path: `${UI_COMPONENTS_PREFIX_PATH}/tag`,
        component: lazy(() => import('@/views/ui-components/data-display/Tag')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.timeline',
        path: `${UI_COMPONENTS_PREFIX_PATH}/timeline`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Timeline'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.dataDisplay.tooltip',
        path: `${UI_COMPONENTS_PREFIX_PATH}/tooltip`,
        component: lazy(
            () => import('@/views/ui-components/data-display/Tooltip'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.checkbox',
        path: `${UI_COMPONENTS_PREFIX_PATH}/checkbox`,
        component: lazy(() => import('@/views/ui-components/forms/Checkbox')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.datePicker',
        path: `${UI_COMPONENTS_PREFIX_PATH}/date-picker`,
        component: lazy(() => import('@/views/ui-components/forms/DatePicker')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.formControl',
        path: `${UI_COMPONENTS_PREFIX_PATH}/form-control`,
        component: lazy(
            () => import('@/views/ui-components/forms/FormControl'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.input',
        path: `${UI_COMPONENTS_PREFIX_PATH}/input`,
        component: lazy(() => import('@/views/ui-components/forms/Input')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.inputGroup',
        path: `${UI_COMPONENTS_PREFIX_PATH}/input-group`,
        component: lazy(() => import('@/views/ui-components/forms/InputGroup')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.radio',
        path: `${UI_COMPONENTS_PREFIX_PATH}/radio`,
        component: lazy(() => import('@/views/ui-components/forms/Radio')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.segment',
        path: `${UI_COMPONENTS_PREFIX_PATH}/segment`,
        component: lazy(() => import('@/views/ui-components/forms/Segment')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.select',
        path: `${UI_COMPONENTS_PREFIX_PATH}/select`,
        component: lazy(() => import('@/views/ui-components/forms/Select')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.switcher',
        path: `${UI_COMPONENTS_PREFIX_PATH}/switcher`,
        component: lazy(() => import('@/views/ui-components/forms/Switcher')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.forms.timeInput',
        path: `${UI_COMPONENTS_PREFIX_PATH}/time-input`,
        component: lazy(() => import('@/views/ui-components/forms/TimeInput')),
        authority: [],
    },
    {
        key: 'uiComponent.forms.upload',
        path: `${UI_COMPONENTS_PREFIX_PATH}/upload`,
        component: lazy(() => import('@/views/ui-components/forms/Upload')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.navigation.dropdown',
        path: `${UI_COMPONENTS_PREFIX_PATH}/dropdown`,
        component: lazy(
            () => import('@/views/ui-components/navigation/Dropdown'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.navigation.menu',
        path: `${UI_COMPONENTS_PREFIX_PATH}/menu`,
        component: lazy(() => import('@/views/ui-components/navigation/Menu')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.navigation.pagination',
        path: `${UI_COMPONENTS_PREFIX_PATH}/pagination`,
        component: lazy(
            () => import('@/views/ui-components/navigation/Pagination'),
        ),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.navigation.steps',
        path: `${UI_COMPONENTS_PREFIX_PATH}/steps`,
        component: lazy(() => import('@/views/ui-components/navigation/Steps')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.navigation.tabs',
        path: `${UI_COMPONENTS_PREFIX_PATH}/tabs`,
        component: lazy(() => import('@/views/ui-components/navigation/Tabs')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.graph.charts',
        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/charts`,
        component: lazy(() => import('@/views/ui-components/graph/Charts')),
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'uiComponent.graph.maps',
        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/maps`,
        component: lazy(() => import('@/views/ui-components/graph/Maps')),
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
        authority: [],
    },
]

export const protectedRoutes: Routes = [
    ...dashboardsRoute,
    ...actorsRoute,
    ...conceptsRoute,
    ...uiComponentsRoute,
    ...authDemoRoute,
    ...guideRoute,
    ...othersRoute,
]
