import React from 'react'

const HabitatDetail = ({params}) => {

    return (
        <div>
            detail
            console.log(params.id)
            <h1>{params.id}</h1>
        </div>
    )
}

export default HabitatDetail
