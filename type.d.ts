declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '*.svg' {
    export default React.FC<React.SVGProps<SVGSVGElement>>
}

declare type NullableObject = Record<string, any> | null
declare type NullableArray = Record<string, any>[] | null
declare type Nullable<T> = T | null

declare module '*.svg' {
    const src: string
    export default src
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}
