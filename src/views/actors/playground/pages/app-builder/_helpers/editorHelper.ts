import { Button } from '../../../pages/editor/components/Button'

export const AllComponents: any = {
    Button,
}

export const getComponentToRender = (componentName: any) => {
    return AllComponents[componentName]
}
