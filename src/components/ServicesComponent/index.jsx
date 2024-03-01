import React from 'react'

const ServicesComponent = ({ colBg, name, colName, nameE, colNameE, text1, text2, colText }) => {
    return (
        <div className=''>
            <div style={{ backgroundColor: colBg, padding: '20px' }}>
                <h6
                    style={{ color: colName }}
                    className={`font-roboto font-bold text-[0.85em] mb-[0.5em] uppercase opacity-80`}>
                    {name}
                </h6>
                <h1 className='font-playfairDisplay font-bold text-[1.7em] mb-[0.5em] uppercase'>
                    <p
                        style={{ color: colNameE }}
                    >
                        {nameE}
                    </p>
                </h1>
                <p
                    style={{ color: colText }}
                    className={`font-roboto pt-12 mb-4 text-right text-[11pt]`}
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
