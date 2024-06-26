import React from 'react'
import './index.css'

const ProjectComponent = ({ title, name, img, isHovered }) => {
    return (
        <div className='product-item w-full h-60 bg-white p-0.5 rounded-md'>
            <div className='relative text-[#f1f1f1] hover:text-slate-400 rounded-lg overflow-hidden'>
                <div className={`product-over ${isHovered ? 'hovered' : ''}`}>
                    <img className='w-full h-[235px] object-cover' src={img} alt="" />
                </div>
                <div className='w-full absolute bottom-0 pt-[0.63em] pb-[1.26em] px-[1.35em] text-center'>
                    <h4 className='my-[0.1em]'>{title}</h4>
                    <p className='my-[0.1em] uppercase'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent
