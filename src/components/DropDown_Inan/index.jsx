import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { DiamondIcon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

export default function DropDown_Inan() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={`flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2`}>
                    In ấn
                    <ChevronDownIcon
                        className='h-4 w-4'
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute border-[1.6px] left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <FontAwesomeIcon className='text-white absolute -top-2 left-4' icon={faDiamond} />
                        <Menu.Item>
                            {({ active }) => (
                                <Link to="/san-xuat-in-an/in-nhanh" className='font-robotoSlab text-base text-[#666666D9] block px-4 py-2'>
                                    In nhanh
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to="/san-xuat-in-an/in-offset" className='font-robotoSlab text-base text-[#666666D9] block px-4 py-2'>
                                    In offset
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to="/san-xuat-in-an/in-quang-cao" className='font-robotoSlab text-base text-[#666666D9] block px-4 py-2'>
                                    In quảng cáo
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
