import React from 'react'

const SmallSpinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-black'></div>
        </div>
    )
}

export default SmallSpinner
