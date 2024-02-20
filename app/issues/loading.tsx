import { Table } from '@radix-ui/themes'
import React from 'react'   
import IssueActionComponent from './IssueActionComponent';
const array =[1,2,3,4,5,6,7,8];


function TableSkelEton() {

  return (
<div>
<div className='p-5'>
<IssueActionComponent/>
</div>
<div className='p-5'></div>
    <Table.Root variant='surface'>
    <Table.Header>
    <Table.Row align={'end'}>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Satus</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created At</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {array.map((element) => 
         <Table.Row key={element}>
         <Table.Cell> <div className="h-4 bg-slate-200 rounded col-span-1"></div></Table.Cell>
         <Table.Cell><div className="h-4 bg-slate-200 rounded col-span-1"></div></Table.Cell>
         <Table.Cell><div className="h-4 bg-slate-200 rounded col-span-1"></div></Table.Cell>
       </Table.Row>
    )}
  </Table.Body>
</Table.Root>
</div>
  )
}

export default TableSkelEton
