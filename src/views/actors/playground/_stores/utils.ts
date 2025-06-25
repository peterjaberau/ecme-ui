import _ from 'lodash'
import { deepClone } from '@/views/actors/playground/_helpers/utilities/utils.helpers'
import { v4 as uuid } from 'uuid'

export function createReferencesLookup(
    refState,
    forQueryParams = false,
    initalLoad = false,
) {
    if (forQueryParams && _.isEmpty(refState['parameters'])) {
        return { suggestionList: [] }
    }

    const getCurrentNodeType = (node) =>
        Object.prototype.toString.call(node).slice(8, -1)

    const state = deepClone(refState)
    const queries = forQueryParams ? {} : state['queries']
    const actions = initalLoad
        ? [
              'runQuery',
              'setVariable',
              'unSetVariable',
              'showAlert',
              'logout',
              'showModal',
              'closeModal',
              'setLocalStorage',
              'copyToClipboard',
              'goToApp',
              'generateFile',
              'setPageVariable',
              'unsetPageVariable',
              'switchPage',
          ]
        : []

    if (!forQueryParams) {
        // eslint-disable-next-line no-unused-vars
        _.forIn(queries, (query, key) => {
            if (!query.hasOwnProperty('run')) {
                query.run = true
            }
        })
    }

    const currentState =
        !forQueryParams && initalLoad ? _.merge(state, { queries }) : state
    const suggestionList = []
    const map = new Map()

    const hintsMap = new Map()
    const resolvedRefs = new Map()
    const resolvedRefTypes = new Map()

    const buildMap = (data, path = '') => {
        const keys = Object.keys(data)
        keys.forEach((key, index) => {
            const uniqueId = uuid()
            const value = data[key]
            const _type = Object.prototype.toString.call(value).slice(8, -1)
            const prevType = map.get(path)?.type

            let newPath = ''
            if (path === '') {
                newPath = key
            } else if (prevType === 'Array') {
                newPath = `${path}[${index}]`
            } else {
                newPath = `${path}.${key}`
            }

            if (_type === 'Object') {
                map.set(newPath, { type: _type })
                buildMap(value, newPath)
            }
            if (_type === 'Array') {
                map.set(newPath, { type: _type })

                if (
                    path.startsWith('queries') &&
                    key === 'data' &&
                    value.length > 30000
                ) {
                    // do nothing
                } else {
                    buildMap(value, newPath)
                }
            } else {
                map.set(newPath, { type: _type })
            }

            // Populate hints and refs

            hintsMap.set(newPath, uniqueId)
            resolvedRefs.set(uniqueId, value)
            const resolveRefType = getCurrentNodeType(value)
            resolvedRefTypes.set(uniqueId, resolveRefType)
        })
    }

    buildMap(currentState, '')

    map.forEach((__, key) => {
        if (key.endsWith('run') && key.startsWith('queries')) {
            return suggestionList.push({ hint: `${key}()`, type: 'Function' })
        }
        return suggestionList.push({
            hint: key,
            type: resolvedRefTypes.get(hintsMap.get(key)),
        })
    })
    if (!forQueryParams && initalLoad) {
        actions.forEach((action) => {
            suggestionList.push({ hint: `actions.${action}()`, type: 'method' })
        })
    }

    return { suggestionList, hintsMap, resolvedRefs }
}
