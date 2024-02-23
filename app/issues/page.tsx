
import React from 'react'
import {Flex, Table } from '@radix-ui/themes';
import NextLink from "next/link"
import Link from '../components/Link';
import Prisma  from "../../prisma/client"
import IssueStatusBadge from '../components/IssueStatusBadge';
import IssueActionComponent from './IssueActionComponent';
import IssueStatusFilter from './IssueStatusFilter';
import { Issue, Status } from '@prisma/client';
import { FaArrowUp } from "react-icons/fa6";


async function  page({searchParams}:{searchParams:{status: Status, orderBy:keyof Issue}}) {
  console.log(searchParams.status);

  const columns :{
    label:string;
    value: keyof Issue;
    className?:string;
  }[] =[
    {label:"Issue", value:'title'},
    {label:'Status',value:'status', className: 'hidden md:table-cell'},
    {label:'Created', value :'createdAt',  className: 'hidden md:table-cell'}
  ]

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status) ?
   searchParams.status : undefined
  
  const orderBy = columns.map(column=>column.value).includes(searchParams.orderBy) ?
  {[searchParams.orderBy]: 'asc'}: undefined


  const issues = await Prisma.issue.findMany({
    where:{
      status
    },
    orderBy
  }); 

  return (
<div>
<Flex justify={'between'} className='p-5'>
  <IssueStatusFilter/>
<IssueActionComponent/>
</Flex>
<div className='p-5'>

<Table.Root variant='surface' >
  <Table.Header>
    <Table.Row align={'end'}>
      {columns.map((column)=>(
         <Table.ColumnHeaderCell 
         key={column.value} 
         className={column.className}>
          <NextLink href={ {
            query:{...searchParams, orderBy:column.value}
          }}>{column.label}
          {column.value === searchParams.orderBy &&  <FaArrowUp className='inline' />}</NextLink>
          </Table.ColumnHeaderCell>))}
    </Table.Row>
  </Table.Header>
  <Table.Body>

    {issues && issues.map((issue)=>
<Table.Row key ={issue.id}>
<Table.Cell><Link href={`/issues/${issue.id}`}>{issue.title} </Link><div className='block md:hidden'><IssueStatusBadge status={issue.status}/></div></Table.Cell>
<Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
<Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
</Table.Row>
    )}
  

  </Table.Body>
</Table.Root>
     </div>

   </div>

  )
}

export const dynamic ="force-dynamic"

export default page
