import ComponentsCatalog from '@/views/ui-components/ark/_common/ComponentsCatalog'
import BasicAvatar from './basic'
import AvatarGroup from './group'
import AvatarGroupPillOutlined from './group-pill-outlined'
import AvatarGroupPillSolid from './group-pill-solid'
import AvatarGroupWithCount from './group-with-count'
import RoundedSquareAvatar from './rounded-square'
import TrustedByAvatars from './trusted-by'
import AvatarWithBadge from './with-badge'
import AvatarWithBadgeMinimal from './with-badge-minimal'
import AvatarWithFallback from './with-fallback'
import AvatarWithIconFallback from './with-icon-fallback'
import AvatarWithMultipleStatus from './with-multiple-status'
import AvatarWithStatus from './with-status'
import AvatarWithStatusMinimal from './with-status-minimal'
import AvatarWithVerification from './with-verification'

export const AvatarCatalog = () => {

    return (
        <ComponentsCatalog columns={2} items={[
            {
                title: 'Basic',
                component: <BasicAvatar />,
            },
            {
                title: 'Rounded Square',
                component: <RoundedSquareAvatar />,
            },
            {
                title: 'With Status',
                component: <AvatarWithStatus />,
            },
            {
                title: 'With Status Minimal',
                component: <AvatarWithStatusMinimal />,
            },
            {
                title: 'With Multiple Status',
                component: <AvatarWithMultipleStatus />,
            },
            {
                title: 'With Badge',
                component: <AvatarWithBadge />,
            },
            {
                title: 'With Badge Minimal',
                component: <AvatarWithBadgeMinimal />,
            },
            {
                title: 'With Fallback',
                component: <AvatarWithFallback />,
            },
            {
                title: 'With Icon Fallback',
                component: <AvatarWithIconFallback />,
            },
            {
                title: 'With Verification',
                component: <AvatarWithVerification />,
            },
            {
                title: 'Group',
                component: <AvatarGroup />,
            },
            {
                title: 'Group with Count',
                component: <AvatarGroupWithCount />,
            },
            {
                title: 'Group Pill Solid',
                component: <AvatarGroupPillSolid />,
            },
            {
                title: 'Group Pill Outlined',
                component: <AvatarGroupPillOutlined />,
            },
            {
                title: 'Trusted By Avatars',
                component: <TrustedByAvatars />,
            }
        ]}/>
    )

}
