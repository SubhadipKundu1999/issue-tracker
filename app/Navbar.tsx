"use client"

import Link from 'next/link'
import React from 'react'
import classNames from 'classnames';

import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
const Navbar = () => {
const currentPath = usePathname();
    const links =[
        { href : "/", text: "Dashboard" },
        {href: "/issues", text : "Issues"}
    ];
  return (
    <div className=' flex h-20 border-black border-1 shadow items-center  px-5 space-x-6  mb-6'>
      <Link href="/"> <FaBug color='red' size={25}/> </Link>
      <ul className='flex gap-4 '>
        {links.map((link)=>{
            return (
                <li key={link.href}> 
                <Link 
                href={link.href} 
                className={classNames({
                    'text-blue-900': link.href === currentPath,
                    'text-slate-400': link.href !== currentPath,
                    'hover:text-blue-900 transition-color text-lg font-semibold':true
                })}>
                    {link.text}
                </Link>
            </li>
            )
        })}
       

     
      </ul>
    </div>
  )
}

export default Navbar
