import type { JSX } from 'react'

export type Group = {
    name: string
    color?: string
    createdAt?: string
    updatedAt?: string
}



export type Workflow = {
    id: string
    name: string
    group: string
    nodes: any[]
    edges: any[]
    createdAt?: string
    updatedAt?: string
}

export type GetWorkflowsRequest = Group

export type GetWorkflowsResponse = Workflow[]

export type GetWorkflowRequest = { id: string }

export type GetWorkflowResponse = Workflow
