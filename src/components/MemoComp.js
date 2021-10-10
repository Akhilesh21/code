import React, { memo } from 'react'

function MemoComp({name}) {
    console.log('Rendering memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default memo(MemoComp) 
