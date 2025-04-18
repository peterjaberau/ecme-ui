import ApiService from './ApiService'

export async function apiGetFlows() {

    return ApiService.fetchDataWithAxios({
        url: '/flows',
        method: 'get',
    })
}

export async function apiGetFlowById({ id }: { id: string }) {
    return ApiService.fetchDataWithAxios({
        url: `/flows/${id}`,
        method: 'get',
    })
}

export async function apiCreateFlow(data: any) {
    return ApiService.fetchDataWithAxios({
        url: '/flows',
        method: 'post',
        data,
    })
}

export async function apiUpdateFlow({
    id,
    ...data
}: { id: string } & Record<string, unknown>) {
    return ApiService.fetchDataWithAxios({
        url: `/flows/${id}`,
        method: 'put',
        data,
    })
}

export async function apiDeleteFlow({ id }: { id: string }) {
    return ApiService.fetchDataWithAxios({
        url: `/flows/${id}`,
        method: 'delete',
    })
}

export async function apiGetFlowGroups() {
    return ApiService.fetchDataWithAxios({
        url: '/flow-groups',
        method: 'get',
    })
}

export async function apiGetFlowGroupById({ id }: { id: string }) {
    return ApiService.fetchDataWithAxios({
        url: `/flow-groups/${id}`,
        method: 'get',
    })
}

export async function apiCreateFlowGroup<T, U extends Record<string, unknown>>(
    data: U,
) {
    return ApiService.fetchDataWithAxios({
        url: '/flows-groups',
        method: 'post',
        data,
    })
}

export async function apiUpdateFlowGroup({ id, ...data }: { id: string } & Record<string, unknown>) {
    return ApiService.fetchDataWithAxios({
        url: `/flows-groups/${id}`,
        method: 'put',
        data,
    })
}

export async function apiDeleteFlowGroup({ id }: { id: string }) {
    return ApiService.fetchDataWithAxios({
        url: `/flows-groups/${id}`,
        method: 'delete',
    })
}
