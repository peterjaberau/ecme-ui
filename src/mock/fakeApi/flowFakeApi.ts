import { mock } from '../MockAdapter'


import Flows from '@/mock/sqlite/models/flows'
import Groups from '@/mock/sqlite/models/groups'

import { nanoid } from 'nanoid'

mock.onGet(`/api/flows`).reply( () => {
    try {
        const flows =  Flows.findAll()

        return [200, flows]
    } catch (error: any) {
        const isNotFound = error.message === 'Flow not found'
        return [isNotFound ? 404 : 500, { error: error.message }]
    }
})

mock.onGet(new RegExp(`/api/flows*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    try {
        const flow =  Flows.findByPk(id)



        return [200, flow]
    } catch (error: any) {
        const isNotFound = error.message === 'Flow not found'
        return [isNotFound ? 404 : 500, { error: error.message }]
    }
})

mock.onPost(new RegExp(`/api/flows`)).reply( (config) => {
    const data = config.data

    const newFlow: any = {
        id: nanoid(12),
        name: 'Flow',
    }

    try {
        const flow =  Flows.create(newFlow)

        return [200, flow]
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})

mock.onPut(new RegExp(`/api/flows*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    const data = config.data

    try {
        const flow: any =  Flows.findByPk(id)

        if (!flow) {
            return [404, { message: 'Flow not found' }]
        }

         flow.update(data)
        return [200, flow]
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})

mock.onDelete(new RegExp(`/api/flows*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    try {
        const flow: any =  Flows.findByPk(id)

        if (!flow) {
            return [404, { message: 'Flow not found' }]
        }

         flow.destroy()
        return [204, 'Flow removed']
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})



mock.onGet(`/api/flow-groups`).reply( () => {
    try {
        const flowGroups =  Groups.findAll()
        return [200, flowGroups]
    } catch (error: any) {
        const isNotFound = error.message === 'Flow not found'
        return [isNotFound ? 404 : 500, { error: error.message }]
    }
})

mock.onGet(new RegExp(`/api/flow-groups*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    try {
        const flowGroups =  Groups.findByPk(id)

        return [200, flowGroups]
    } catch (error: any) {
        const isNotFound = error.message === 'flowGroup not found'
        return [isNotFound ? 404 : 500, { error: error.message }]
    }
})

mock.onPost(new RegExp(`/api/flow-groups`)).reply( (config) => {
    const data = config.data

    const newFlowGroup: any = {
        id: nanoid(12),
        name: 'Group',
    }

    try {
        const flowGroup =  Groups.create(newFlowGroup)

        return [200, flowGroup]
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})

mock.onPut(new RegExp(`/api/flow-groups*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    const data = config.data

    try {
        const group: any =  Groups.findByPk(id)

        if (!group) {
            return [404, { message: 'Flow group not found' }]
        }

        group.update(data)
        return [200, group]
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})

mock.onDelete(new RegExp(`/api/flow-groups*`)).reply( (config) => {
    const urlSegment = config.url?.split('/')
    const id = urlSegment?.[(urlSegment?.length || 0) - 1]

    try {
        const group: any =  Groups.findByPk(id)

        if (!group) {
            return [404, { message: 'Flow group not found' }]
        }

        group.destroy()
        return [204, 'Flow group removed']
    } catch (error: any) {
        return [500, { error: error.message }]
    }
})

