import { useRef } from 'react'
import Dropdown from '@/components/ui/Dropdown'
import EllipsisButton from '@/components/shared/EllipsisButton'
import {
    TbCloudDownload,
    TbPencil,
    TbUserPlus,
    TbTrash,
    TbFolderSymlink,
} from 'react-icons/tb'
import type { DropdownRef } from '@/components/ui/Dropdown'
import type { MouseEvent, SyntheticEvent } from 'react'


const FlowItemDropdown = (props: any) => {
    const { onDelete, onShare, onRename, onDownload, onOpen } = props

    const dropdownRef = useRef<DropdownRef>(null)

    const handleDropdownClick = (e: MouseEvent) => {
        e.stopPropagation()
        dropdownRef.current?.handleDropdownOpen()
    }

    const handleDropdownItemClick = (
        e: SyntheticEvent,
        callback?: () => void,
    ) => {
        e.stopPropagation()
        callback?.()
    }

    return (
        <Dropdown
            ref={dropdownRef}
            renderTitle={<EllipsisButton onClick={handleDropdownClick} />}
            placement="bottom-end"
        >
            <Dropdown.Item
                onClick={(e) => handleDropdownItemClick(e, onDelete)}
            >
                <span className="flex items-center gap-2 text-error">
                    <TbTrash className="text-xl" />
                    <span>Delete</span>
                </span>
            </Dropdown.Item>
        </Dropdown>
    )
}

export default FlowItemDropdown
