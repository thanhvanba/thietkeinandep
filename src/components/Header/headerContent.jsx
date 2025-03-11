// import React from 'react'
// import DropDown_Inan from '../DropDown_Inan'
// import DropDown_Design from '../DropDown_design'
// import { HashLink } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'

// export default function HeaderContent({ currentTab }) {
//   return (
//     <div className='hidden md:block'>
//       <ul className='flex'>
//         <li className='mx-2 relative'>
//           <Link to='/' className={`${currentTab === "0" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
//             TRANG CHỦ
//           </Link>
//         </li>
//         <li className={`${currentTab === "5" ? 'active' : ''} mx-2 relative  option-style`}>
//           <DropDown_Inan />
//         </li>
//         <li className={`${currentTab === "1" ? 'active' : ''} mx-2 relative  option-style`}>
//           <DropDown_Design />
//         </li>
//         <li className='mx-2 relative'>
//           <Link to='/tin-tuc' className={`${currentTab === "2" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
//             TIN TỨC
//           </Link>
//         </li>
//         <li className='mx-2 relative'>
//           <HashLink to='/du-an' className="w-1/3">
//             <p className={`${currentTab === "3" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
//               DỰ ÁN
//             </p>
//           </HashLink>
//         </li>
//         <li className='mx-2 relative'>
//           <Link to='/lien-he' className={`${currentTab === "4" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
//             LIÊN HỆ
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";

export default function HeaderContent({ currentTab }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "TRANG CHỦ", href: "/", tab: "0" },
    {
      name: "IN ẤN",
      tab: "5",
      dropdown: [
        { name: "In Nhanh", href: "/san-xuat-in-an/in-nhanh" },
        { name: "In Offset", href: "/san-xuat-in-an/in-offset" },
        { name: "In Quảng Cáo", href: "/san-xuat-in-an/in-quang-cao" },
      ],
    },
    {
      name: "THIẾT KẾ",
      tab: "1",
      dropdown: [
        { name: "Thiết Kế Logo", href: "/thiet-ke-logo" },
        { name: "Thiết Kế Bao Bì", href: "/thiet-ke-bao-bi" },
        { name: "Thiết Kế Quảng Cáo", href: "/thiet-ke-quang-cao" },
      ],
    },
    { name: "DỰ ÁN", href: "/du-an", tab: "3" },
    { name: "TIN TỨC", href: "/tin-tuc", tab: "2" },
    { name: "LIÊN HỆ", href: "/lien-he", tab: "4" },
  ];

  return (
    <div className="hidden md:block">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => setOpenDropdown(item.dropdown ? item.tab : null)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.dropdown ? (
              <>
                <NavItem name={item.name} isActive={currentTab === item.tab} icon={<ChevronDownIcon className="h-4 w-4 inline-block ml-1" aria-hidden="true" />} />
                <DropdownContent isOpen={openDropdown === item.tab}>
                  {item.dropdown.map((subItem) => (
                    <DropdownItem key={subItem.href} name={subItem.name} href={subItem.href} />
                  ))}
                </DropdownContent>
              </>
            ) : (
              <Link to={item.href}>
                <NavItem name={item.name} isActive={currentTab === item.tab} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const NavItem = ({ name, isActive, icon }) => (
  <div className="flex items-center text-[12.8px] font-bold uppercase font-robotoSlab py-2 relative option-style">
    {name}
    {icon}
    {isActive && (
      <motion.div
        layoutId="navbar-indicator"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </div>
);

const DropdownContent = ({ isOpen, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute left-0 mt-2 bg-white shadow-lg z-[999] rounded-md w-40 py-2"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const DropdownItem = ({ name, href }) => (
  <Link to={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {name}
  </Link>
);
