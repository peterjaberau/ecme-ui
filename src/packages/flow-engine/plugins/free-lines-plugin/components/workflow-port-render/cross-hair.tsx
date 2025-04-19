import React, { ReactElement } from 'react'

// demo 环境自绘 cross-hair，正式环境使用 IconAdd
export default function CrossHair(): ReactElement {
    return (
        <div className="symbol">
            <div className="cross-hair" />
        </div>
    )
}
