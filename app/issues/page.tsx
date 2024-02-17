import React from 'react'
import {Button } from '@radix-ui/themes';
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
function page() {
  return (
    <div className='p-5'>
<Link href={"/issues/new"}> 
<Button variant='solid' className='hover:cursor-pointer text-xl'>
 <FaPlus size={20} /> New Issue
 </Button>
 </Link>
    </div>
  )
}

export default page
