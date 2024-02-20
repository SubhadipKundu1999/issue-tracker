import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import  Prisma  from '../../../prisma/client'
import React from 'react'
import Markdown from 'react-markdown'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import delay from 'delay'
interface Props{
    params:{
        id:string
    }
}

async function IssueDetailsPage({params:{id}}: Props) {
    const issueDetails = await Prisma.issue.findUnique({
        where:{
            id: parseInt(id)
        }
    })

  return (
    <>
    {issueDetails && 
    <div className='p-5 mt-10 prose'>
        <Heading>
            {issueDetails?.title}
        </Heading>
        
        <Flex gap={'4'} my={'5'}>
            <IssueStatusBadge status={issueDetails.status}/>
            <Text>{issueDetails.createdAt.toDateString()} </Text>
        </Flex>
        <Card>
          <Markdown>{issueDetails.description}</Markdown>
        </Card>
        
      
    </div>
  }
  </>
  )
}

export default IssueDetailsPage
