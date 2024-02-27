import React from 'react'

const ProjectComponent = ({ title, name, img }) => {
    return (
        <div className='w-full h-60 bg-white p-0.5 rounded-md'>
            <div className='relative text-[#f1f1f1] rounded-lg overflow-hidden'>
                <div>
                    <img className='w-full h-[235px] object-cover' src={img} alt="" />
                </div>
                <div className='w-full absolute bottom-0 pt-[0.63em] pb-[1.26em] px-[1.35em] text-center'>
                    <h4 className='text-white my-[0.1em]'>{title}</h4>
                    <p className='my-[0.1em] uppercase'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent
