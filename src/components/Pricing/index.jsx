import { CheckIcon } from 'lucide-react'
import React from 'react'
import './index.css'

const Pricing = () => {
    return (
        <div className="bg-[#EDEDED] w-full xl:max-w-[1296px] mx-auto px-10">
            <div className="text-center pt-16">
                <h1 className="text-2xl text-[#334862] font-bold">Định giá</h1>
                {/* <p className="text-lg md:text-5xl text-black font-bold mt-2">Pricing plans for teams of&nbsp;all&nbsp;sizes</p> */}
            </div>
            {/* <p className="mt-6 mx-2 md:mx-64 text-black text-center">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p> */}

            <div className="cards gap-x-8 py-6 md:py-12 flex justify-between md:flex-row flex-col w-full">
                <div className="card cursor-pointer border-[1px] border-slate-700 border-solid p-4 sm:p-10 text-black rounded-xl md:rounded-3xl w-full md:w-1/3">
                    <div className="">
                        <h2 className='text-md md:text-lg font-bold'>BASIC</h2>
                    </div>
                    <p className="mt-2 md:mt-4 text-sm">The essentials to provide your best work for clients.</p>
                    <p className="mt-3 md:mt-6 flex gap-x-1 items-baseline">
                        <span className="text-xl md:text-4xl font-bold">$15</span>
                        <span className="text-sm font-semibold">/month</span>
                    </p>
                    <div href="#" className="mt-3 md:mt-6 rounded-lg px-1 md:px-3 py-2 bg-[#00000019] text-center">Xem chi tiết</div>
                    <ul role="list" className="mt-5 md:mt-10">
                        <li className="relative flex">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>2 mẫu phác thảo</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Chỉnh sửa tối đa 3 lần</p>
                        </li>
                        <li className="relative flex mt-3">
                           <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Giao File gốc hoàn chỉnh: .AI- .PDF - .JPG - .PNG</p>
                        </li>
                    </ul>
                </div>
                <div className="card cursor-pointer border-[2px] border-orange-600 border-solid p-4 sm:p-10 text-black rounded-xl md:rounded-3xl w-full md:w-1/3 bg-[#ff6f0008]">
                    <div className="">
                        <h2 className='text-md md:text-lg font-bold'>ADVANGED</h2>
                    </div>
                    <p className="mt-2 md:mt-4 text-sm">The essentials to provide your best work for clients.</p>
                    <p className="mt-3 md:mt-6 flex gap-x-1 items-baseline">
                        <span className="text-xl md:text-4xl font-bold">$15</span>
                        <span className="text-sm font-semibold">/month</span>
                    </p>
                    <div href="#" className="mt-3 md:mt-6 rounded-lg px-1 md:px-3 py-2 bg-[#00000019] text-center">Xem chi tiết</div>
                    <ul role="list" className="mt-5 md:mt-10">
                        <li className="relative flex">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>4 mẫu phác thảo</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Chỉnh sửa tối đa 5 lần</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Kèm bảng Guide line</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Thiết kế Namecard</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Giao File gốc hoàn chỉnh: .AI- .PDF - .JPG - .PNG</p>
                        </li>
                    </ul>
                </div>
                <div className="card cursor-pointer border-[1px] border-slate-700 border-solid p-4 sm:p-10 text-black rounded-xl md:rounded-3xl w-full md:w-1/3">
                    <div className="">
                        <h2 className='text-md md:text-lg font-bold'>PREMIUM</h2>
                    </div>
                    <p className="mt-2 md:mt-4 text-sm">The essentials to provide your best work for clients.</p>
                    <p className="mt-3 md:mt-6 flex gap-x-1 items-baseline">
                        <span className="text-xl md:text-4xl font-bold">$15</span>
                        <span className="text-sm font-semibold">/month</span>
                    </p>
                    <div href="#" className="mt-3 md:mt-6 rounded-lg px-1 md:px-3 py-2 bg-[#00000019] text-center">Xem chi tiết</div>
                    <ul role="list" className="mt-5 md:mt-10">
                        <li className="relative flex">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>6 mẫu phác thảo</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Chỉnh sửa tối đa 6 lần</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Phối cảnh Logo 3D</p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>
                                Bộ nhận diện thương hiệu cơ bản: Namecard
                                Bao thư - Letter Head
                            </p>
                        </li>
                        <li className="relative flex mt-3">
                            <CheckIcon className='absolute top-1 md:top-0 left-0 h-4 w-4 md:h-6 md:w-6' />
                            <p className='pl-6 md:pl-8'>Giao File gốc hoàn chỉnh: .AI- .PDF - .JPG - .PNG</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing
