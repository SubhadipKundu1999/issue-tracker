"use client"
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

const statuses:{label:String, value?: Status}[]=
[
  {label:'ALL' },
  { label:"OPEN", value:"OPEN"},
  {label:"IN PROGRESS", value: "IN_PROGRESS"},
  {label:"CLOSED", value:"CLOSED"}
]

function IssueStatusFilter() {
  const router = useRouter()
  return (
    <Select.Root onValueChange={(statusValue)=>{
      if(statusValue == "empty") 
      router.push("/issues" );
      else 
      router.push(`/issues?status=${statusValue}`)
    }}>
        <Select.Trigger placeholder='Status ..'/>
        <Select.Content >
         <Select.Group>
         <Select.Label>Status</Select.Label>
         {statuses.map((status)=>  
             <Select.Item 
                key={status.value} 
                value={status.value || "empty"}>
              {status.label}
              </Select.Item>)}
        </Select.Group>
       </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter
