import DemoLayout from '@/components/docs/DemoLayout'
import MultiLevelAccordion from './multi-level'
import MultiLevelWithIconAccordion from './multi-level-with-icon'
import TableWithChevronAccordion from './table-with-chevron'
import TableWithLeftChevronAccordion from './table-with-left-chevron'
import TableWithLeftPlusMinusAccordion from './table-with-left-plus-minus'
import TableWithPlusMinusAccordion from './table-with-plus-minus'
import TabsWithChevronAccordion from './tabs-with-chevron'
import TabsWithLeftChevronAccordion from './tabs-with-left-chevron'
import TabsWithLeftPlusMinusAccordion from './tabs-with-left-plus-minus'
import TabsWithPlusMinusAccordion from './tabs-with-plus-minus'
import BasicAccordion from './with-chevron'
import WithIconAndChevronAccordion from './with-icon-and-chevron'
import WithIconAndPlusMinusAccordion from './with-icon-and-plus-minus'
import WithLeftChevronAccordion from './with-left-chevron'
import WithLeftPlusMinusAccordion from './with-left-plus-minus'
import WithSubHeaderAndChevronAccordion from './with-sub-header-and-chevron'
import WithSubHeaderAndPlusMinusAccordion from './with-sub-header-and-plus-minus'
import WithIconSubHeaderAndChevronAccordion from './with-icon-sub-header-and-chevron'
import WithIconSubHeaderAndPlusMinusAccordion from './with-icon-sub-header-and-plus-minus'
import ComponentsCatalog from '@/views/ui-components/ark/_common/ComponentsCatalog'

export const AccordionCatalog = () => {
    return (
        <ComponentsCatalog columns={2}  items={[
            {
                title: 'Multi Levels',
                component: <MultiLevelAccordion />,
            },
            {
                title: 'Multi Levels w/ icon',
                component: <MultiLevelWithIconAccordion />,
            },
            {
                title: 'W/ chevron',
                component: <BasicAccordion />,
            },
            {
                title: 'W/ plus-minus',
                component: <WithLeftPlusMinusAccordion />,
            },
            {
                title: 'W/ left chevron',
                component: <WithLeftChevronAccordion />,
            },
            {
                title: 'W/ left plus-minus',
                component: <WithLeftPlusMinusAccordion />,
            },
            {
                title: 'W/ icon and chevron',
                component: <WithIconAndChevronAccordion />,
            },
            {
                title: 'W/ icon and plus-minus',
                component: <WithIconAndPlusMinusAccordion />,
            },
            {
                title: 'W/ sub-header and chevron',
                component: <WithSubHeaderAndChevronAccordion />,
            },
            {
                title: 'W/ sub-header and plus-minus',
                component: <WithSubHeaderAndPlusMinusAccordion />,
            },
            {
                title: 'W/ icon, sub-header, and chevron',
                component: <WithIconSubHeaderAndChevronAccordion />,
            },
            {
                title: "W/ icon, sub-header, and plus-minus",
                component: <WithIconSubHeaderAndPlusMinusAccordion />,

            },
            {
                title: "Tabs w/ chevron",
                component: <TabsWithChevronAccordion />,

            },
            {
                title: "Tabs w/ plus-minus",
                component: <TabsWithPlusMinusAccordion />,

            },
            {
                title: "Tabs w/ left chevron",
                component: <TabsWithLeftChevronAccordion />,

            },
            {
                title: "Tabs w/ left plus-minus",
                component: <TabsWithLeftPlusMinusAccordion />,

            },
            {
                title: "Table w/ chevron",
                component: <TableWithChevronAccordion />,

            },
            {
                title: "Table w/ plus-minus",
                component: <TableWithPlusMinusAccordion />,

            },
            {
                title: "Table w/ left chevron",
                component: <TableWithLeftChevronAccordion />,

            },
            {
                title: "Table w/ left plus-minus",
                component: <TableWithLeftPlusMinusAccordion />,
            },
        ]} />
    )
}

const mdPath = 'Accordion'

const demoHeader = {
    title: 'Accordion',
}

const demos = [
    {
        mdName: 'multi-level',
        mdPath: mdPath,
        title: 'Multi Level',
        desc: '',
        component: <MultiLevelAccordion />,
    },
    {
        mdName: 'multi-level-with-icon',
        mdPath: mdPath,
        title: 'Multi-level w/ icon',
        desc: '',
        component: <MultiLevelWithIconAccordion />,
    },
    {
        mdName: 'with-chevron',
        mdPath: mdPath,
        title: 'W/ chevron',
        desc: '',
        component: <BasicAccordion />,
    },
    {
        mdName: 'with-plus-minus',
        mdPath: mdPath,
        title: 'W/ plus-minus',
        desc: '',
        component: <WithLeftPlusMinusAccordion />,
    },
    {
        mdName: 'with-left-chevron',
        mdPath: mdPath,
        title: 'W/ left chevron',
        desc: '',
        component: <WithLeftChevronAccordion />,
    },
    {
        mdName: 'with-left-plus-minus',
        mdPath: mdPath,
        title: 'W/ left plus-minus',
        desc: '',
        component: <WithLeftPlusMinusAccordion />,
    },
    {
        mdName: 'with-icon-and-chevron',
        mdPath: mdPath,
        title: 'W/ icon and chevron',
        desc: '',
        component: <WithIconAndChevronAccordion />,
    },
    {
        mdName: 'with-icon-and-plus-minus',
        mdPath: mdPath,
        title: 'W/ icon and plus-minus',
        desc: '',
        component: <WithIconAndPlusMinusAccordion />,
    },
    {
        mdName: 'with-sub-header-and-chevron',
        mdPath: mdPath,
        title: 'W/ sub-header and chevron',
        desc: '',
        component: <WithSubHeaderAndChevronAccordion />,
    },
    {
        mdName: 'with-sub-header-and-plus-minus',
        mdPath: mdPath,
        title: 'W/ sub-header and plus-minus',
        desc: '',
        component: <WithSubHeaderAndPlusMinusAccordion />,
    },
    {
        mdName: 'with-icon-sub-header-and-chevron',
        title: 'W/ icon, sub-header, and chevron',
        mdPath: mdPath,
        desc: '',
        component: <WithIconSubHeaderAndChevronAccordion />,
    },
    {
        mdName: "with-icon-sub-header-and-plus-minus",
        title: "W/ icon, sub-header, and plus-minus",
        mdPath: mdPath,
        desc: '',
        component: <WithIconSubHeaderAndPlusMinusAccordion />,

    },
    {
        mdName: "tabs-with-chevron",
        title: "Tabs w/ chevron",
        mdPath: mdPath,
        desc: '',
        component: <TabsWithChevronAccordion />,

    },
    {
        mdName: "tabs-with-plus-minus",
        title: "Tabs w/ plus-minus",
        mdPath: mdPath,
        desc: '',
        component: <TabsWithPlusMinusAccordion />,

    },
    {
        mdName: "tabs-with-left-chevron",
        title: "Tabs w/ left chevron",
        mdPath: mdPath,
        desc: '',
        component: <TabsWithLeftChevronAccordion />,

    },
    {
        mdName: "tabs-with-left-plus-minus",
        title: "Tabs w/ left plus-minus",
        mdPath: mdPath,
        desc: '',
        component: <TabsWithLeftPlusMinusAccordion />,

    },
    {
        mdName: "table-with-chevron",
        title: "Table w/ chevron",
        mdPath: mdPath,
        desc: '',
        component: <TableWithChevronAccordion />,

    },
    {
        mdName: "table-with-plus-minus",
        title: "Table w/ plus-minus",
        mdPath: mdPath,
        desc: '',
        component: <TableWithPlusMinusAccordion />,

    },
    {
        mdName: "table-with-left-chevron",
        title: "Table w/ left chevron",
        mdPath: mdPath,
        desc: '',
        component: <TableWithLeftChevronAccordion />,

    },
    {
        mdName: "table-with-left-plus-minus",
        title: "Table w/ left plus-minus",
        mdPath: mdPath,
        desc: '',
        component: <TableWithLeftPlusMinusAccordion />,

    },
    {
        mdName: "multi-level",
        title: "Multi-level",
        mdPath: mdPath,
        desc: '',
        component: <MultiLevelAccordion />,

    },
    {
        mdName: "multi-level-with-icon",
        title: "Multi-level w/ icon",
        mdPath: mdPath,
        desc: '',
        component: <MultiLevelAccordion />,

    },
]

const Accordion = () => {
    return (
        <>
            <DemoLayout header={demoHeader} demos={demos} />
        </>
    )
}

export default Accordion
