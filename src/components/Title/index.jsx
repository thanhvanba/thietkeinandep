import React from 'react'

export default function Title({ text }) {
    return (
        <div className='md:w-3/5 m-auto'>
            <p className='font-robotoSlab font-medium uppercase text-[20px] sm:text-[25pt] text-[#334862] text-center'>
                {text}
            </p>
        </div>
    )
}
