import React from 'react'
import AddRectangle from './AddRectangle'
import Apps from './Apps'
import Archive from './Archive'
import ArrowBack from './ArrowBack'
import ArrowLeft from './Arrowleft'
import ArrowReturn from './ArrowReturn'
import ArrowRight from './ArrowRight'
import ArrowSort from './ArrowSort'
import ArrowSortRectangle from './ArrowSortRectangle'
import ArrowTransfer from './ArrowTransfer'
import ArrowUp from './ArrowUp'
import BookSearch from './BookSearch'
import Branch from './Branch'
import Bug from './Bug'
import Calender from './Calender'
import UsersList from './UsersList'
import CheckRectangle from './CheckRectangle'
import CheveronDown from './CheveronDown'
import CheveronLeft from './CheveronLeft'
import CheveronRight from './CheveronRight'
import CheveronUp from './CheveronUp'
import ClearRectangle from './ClearRectangle'
import Clock from './Clock'
import Columns from './Columns'
import Compass from './Compass'
import Computer from './Computer'
import Copy from './Copy'
import Diamond from './Diamond'
import DownArrow from './DownArrow'
import EditRectangle from './EditRectangle'
import Eye from './Eye'
import Eye1 from './Eye1'
import EyeDisable from './EyeDisable'
import FileDownload from './FileDownload'
import FileUpload from './FileUpload'
import Filter from './Filter'
import FloppyDisk from './FloppyDisk'
import Folder from './Folder'
import FolderDownload from './FolderDownload'
import FolderUpload from './FolderUpload'
import Globe from './Globe'
import Grid from './Grid'
import HelpPolygon from './HelpPolygon'
import Home from './Home'
import Information from './Information'
import InRectangle from './InRectangle'
import Interactive from './Interactive'
import Layers from './Layers'
import LeftArrow from './LeftArrow'
import ListView from './ListView'
import Logout from './Logout'
import Menu from './Menu'
import MenuHome from './MenuHome'
import Minus from './Minus'
import Minus01 from './Minus01'
import Mobile from './Mobile'
import MoreHorizontal from './MoreHorizontal'
import MoreVertical from './MoreVertical'
import Notification from './Notification'
import NotificationRinging from './NotificationRinging'
import NotificationSide from './NotificationSide'
import NotificationSilent from './NotificationSilent'
import NotificationUnread from './NotificationUnread'
import Page from './Page'
import PageAdd from './PageAdd'
import Pin from './Pin'
import Play from './Play'
import Plus from './Plus'
import Plus01 from './Plus01'
import Reload from './Reload'
import Remove from './Remove'
import Remove01 from './Remove01'
import RemoveRectangle from './RemoveRectangle'
import RightArrow from './RightArrow'
import Row from './Row'
import SadRectangle from './SadRectangle'
import Search from './Search'
import SearchMinus from './SearchMinus'
import SearchPlus from './SearchPlus'
import Sent from './Sent'
import SentFast from './SentFast'
import Server from './Server'
import Setting from './Setting'
import Share from './Share'
import Shield from './Shield'
import ShieldCheck from './ShieldCheck'
import Signpost from './Signpost'
import SmileRectangle from './SmileRectangle'
import SortArrowDown from './SortArrowDown'
import SortArrowUp from './SortArrowUp'
import Sun from './Sun'
import Table from './Table'
import Tick from './Tick'
import Trash from './Trash'
import UpArrow from './UpArrow'
import UserAdd from './UserAdd'
import UserGroup from './UserGroup'
import UserRemove from './UserRemove'
import UTurn from './UTurn'
import Variable from './Variable'
import Warning from './Warning'
import ZoomIn from './ZoomIn'
import ZoomOut from './ZoomOut'
import ZoomOutRectangle from './ZoomOutRectangle'
import CheckCircle from './CheckCircle'
import Comments from './Comments'
import CommentsNotification from './CommentsNotification'
import Direction from './Direction'
import Dislike from './Dislike'
import Like from './Like'
import Moon from './Moon'
import RemoveCircle from './RemoveCircle'
import Telescope from './Telescope'
import Unlock from './Unlock'
import DragHandle from './DragHandle'
import Lock from './Lock'
import AddTemplate from './AddTemplate'
import InviteCollaborator from './InviteCollabarator'
import CloseIcon from './CloseIcon'

const Icon = (props) => {
    switch (props.name) {
        case 'closeicon':
            return <CloseIcon {...props} />
        case 'addrectangle':
            return <AddRectangle {...props} />
        case 'addtemplate':
            return <AddTemplate {...props} />
        case 'apps':
            return <Apps {...props} />
        case 'archive':
            return <Archive {...props} />
        case 'arrowback':
            return <ArrowBack {...props} />
        case 'arrowleft':
            return <ArrowLeft {...props} />
        case 'arrowreturn':
            return <ArrowReturn {...props} />
        case 'arrowright':
            return <ArrowRight {...props} />
        case 'arrowsort':
            return <ArrowSort {...props} />
        case 'arrowsortrectangle':
            return <ArrowSortRectangle {...props} />
        case 'arrowtransfer':
            return <ArrowTransfer {...props} />
        case 'arrowup':
            return <ArrowUp {...props} />
        case 'booksearch':
            return <BookSearch {...props} />
        case 'branch':
            return <Branch {...props} />
        case 'bug':
            return <Bug {...props} />
        case 'calender':
            return <Calender {...props} />
        case 'checkrectangle':
            return <CheckRectangle {...props} />
        case 'cheverondown':
            return <CheveronDown {...props} />
        case 'cheveronleft':
            return <CheveronLeft {...props} />
        case 'cheveronright':
            return <CheveronRight {...props} />
        case 'cheveronup':
            return <CheveronUp {...props} />
        case 'clearrectangle':
            return <ClearRectangle {...props} />
        case 'clock':
            return <Clock {...props} />
        case 'columns':
            return <Columns {...props} />
        case 'compass':
            return <Compass {...props} />
        case 'computer':
            return <Computer {...props} />
        case 'copy':
            return <Copy {...props} />
        case 'diamond':
            return <Diamond {...props} />
        case 'downarrow':
            return <DownArrow {...props} />
        case 'editrectangle':
            return <EditRectangle {...props} />
        case 'eye':
            return <Eye {...props} />
        case 'eye1':
            return <Eye1 {...props} />
        case 'eyedisable':
            return <EyeDisable {...props} />
        case 'filedownload':
            return <FileDownload {...props} />
        case 'fileupload':
            return <FileUpload {...props} />
        case 'filter':
            return <Filter {...props} />
        case 'floppydisk':
            return <FloppyDisk {...props} />
        case 'folder':
            return <Folder {...props} />
        case 'folderdownload':
            return <FolderDownload {...props} />
        case 'folderupload':
            return <FolderUpload {...props} />
        case 'globe':
            return <Globe {...props} />
        case 'grid':
            return <Grid {...props} />
        case 'helppolygon':
            return <HelpPolygon {...props} />
        case 'home':
            return <Home {...props} />
        case 'information':
            return <Information {...props} />
        case 'inrectangle':
            return <InRectangle {...props} />
        case 'interactive':
            return <Interactive {...props} />
        case 'layers':
            return <Layers {...props} />
        case 'leftarrow':
            return <LeftArrow {...props} />
        case 'listview':
            return <ListView {...props} />
        case 'lock':
            return <Lock {...props} />
        case 'logout':
            return <Logout {...props} />
        case 'menu':
            return <Menu {...props} />
        case 'menuhome':
            return <MenuHome {...props} />
        case 'minus':
            return <Minus {...props} />
        case 'minus01':
            return <Minus01 {...props} />
        case 'mobile':
            return <Mobile {...props} />
        case 'morehorizontal':
            return <MoreHorizontal {...props} />
        case 'morevertical':
            return <MoreVertical {...props} />
        case 'notification':
            return <Notification {...props} />
        case 'notificationringing':
            return <NotificationRinging {...props} />
        case 'notificationside':
            return <NotificationSide {...props} />
        case 'notificationsilent':
            return <NotificationSilent {...props} />
        case 'notificationunread':
            return <NotificationUnread {...props} />
        case 'invitecollab':
            return <InviteCollaborator {...props} />
        case 'page':
            return <Page {...props} />
        case 'pageAdd':
            return <PageAdd {...props} />
        case 'pin':
            return <Pin {...props} />
        case 'play':
            return <Play {...props} />
        case 'plus':
            return <Plus {...props} />
        case 'plus01':
            return <Plus01 {...props} />
        case 'reload':
            return <Reload {...props} />
        case 'remove':
            return <Remove {...props} />
        case 'remove01':
            return <Remove01 {...props} />
        case 'removerectangle':
            return <RemoveRectangle {...props} />
        case 'rightarrrow':
            return <RightArrow {...props} />
        case 'row':
            return <Row {...props} />
        case 'sadrectangle':
            return <SadRectangle {...props} />
        case 'search':
            return <Search {...props} />
        case 'searchminus':
            return <SearchMinus {...props} />
        case 'searchplus':
            return <SearchPlus {...props} />
        case 'sent':
            return <Sent {...props} />
        case 'sentfast':
            return <SentFast {...props} />
        case 'server':
            return <Server {...props} />
        case 'setting':
            return <Setting {...props} />
        case 'share':
            return <Share {...props} />
        case 'shield':
            return <Shield {...props} />
        case 'shieldcheck':
            return <ShieldCheck {...props} />
        case 'signpost':
            return <Signpost {...props} />
        case 'smilerectangle':
            return <SmileRectangle {...props} />
        case 'sortarrowdown':
            return <SortArrowDown {...props} />
        case 'sortarrowup':
            return <SortArrowUp {...props} />

        case 'sun':
            return <Sun {...props} />
        case 'table':
            return <Table {...props} />
        case 'tick':
            return <Tick {...props} />
        case 'trash':
            return <Trash {...props} />
        case 'uparrow':
            return <UpArrow {...props} />
        case 'users':
            return <UsersList {...props} />

        case 'useradd':
            return <UserAdd {...props} />
        case 'usergroup':
            return <UserGroup {...props} />
        case 'userremove':
            return <UserRemove {...props} />
        case 'uturn':
            return <UTurn {...props} />
        case 'variable':
            return <Variable {...props} />
        case 'warning':
            return <Warning {...props} />
        case 'zoomin':
            return <ZoomIn {...props} />
        case 'zoomout':
            return <ZoomOut {...props} />
        case 'zoomoutrectangle':
            return <ZoomOutRectangle {...props} />
        case 'unlock':
            return <Unlock {...props} />
        case 'telescope':
            return <Telescope {...props} />
        case 'removeCircle':
            return <RemoveCircle {...props} />
        case 'moon':
            return <Moon {...props} />
        case 'like':
            return <Like {...props} />
        case 'draghandle':
            return <DragHandle {...props} />
        case 'dislike':
            return <Dislike {...props} />
        case 'direction':
            return <Direction {...props} />
        case 'commentsnotification':
            return <CommentsNotification {...props} />
        case 'comments':
            return <Comments {...props} />
        case 'checkcircle':
            return <CheckCircle {...props} />

        default:
            return <Apps {...props} />
    }
}
export default Icon
