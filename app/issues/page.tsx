
import React from 'react'
import {Table } from '@radix-ui/themes';

import Link from '../components/Link';
import Prisma  from "../../prisma/client"
import IssueStatusBadge from '../components/issueStatusBadge';
import delay from 'delay'
import IssueActionComponent from './IssueActionComponent';
async function  page() {

  const issues = await Prisma.issue.findMany();
  await delay(2000);

  return (
<div>
<div className='p-5'>
<IssueActionComponent/>
</div>
<div className='p-5'>

<Table.Root variant='surface' >
  <Table.Header>
    <Table.Row align={'end'}>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Satus</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created At</Table.ColumnHeaderCell>
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

export default page
