import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status, { label:string, color: 'red' | 'violet' | 'green'}> = {
    OPEN:{label: "open", color:'green'},
    IN_PROGRESS:{label:'In Progress', color:'violet'},
    CLOSED:{label:'red', color:'red'}
}

function IssueStatusBadge({status}:{status:Status}) {
  return (
    <Badge color={statusMap[status].color}>
        {statusMap[status].label}
    </Badge>
  )
}

export default IssueStatusBadge
