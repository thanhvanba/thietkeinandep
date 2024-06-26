import React from 'react'
import './index.css'

const ServicesComponent = ({ colBg, name, colName, nameE, colNameE, text1, text2, colText }) => {
    return (
        <div className='h-full'>
            <div className='card px-5 sm:px-3 md:px-4 lg:px-5 py-5 h-full' style={{ backgroundColor: colBg}} >
                <h6
                    style={{ color: colName }}
                    className={`font-roboto font-bold text-[0.85em] uppercase opacity-80`}>
                    {name}
                </h6>
                <h1 className='font-playfairDisplay font-bold text-[1.7em] uppercase leading-8'>
                    <p
                        style={{ color: colNameE }}
                    >
                        {nameE}
                    </p>
                </h1>
                <p
                    style={{ color: colText }}
                    className={`font-roboto mb-4 text-right text-[11pt] md:text[9pt] lg:text-[11pt]`}
                >
                    {text1}
                    <br />
                    {text2}
                </p>
            </div>
        </div>

    )
}

export default ServicesComponent
