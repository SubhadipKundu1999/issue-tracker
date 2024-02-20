import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import  Prisma  from '../../../prisma/client'
import React from 'react'
import Markdown from 'react-markdown'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import delay from 'delay'
import { FaRegEdit } from "react-icons/fa";
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
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
    <Grid columns={{initial:"1", md:"2"}} className='p-5 mt-10 prose min-w-full gap-5'>
        <Box className='min-w-full'> 
             { issueDetails  &&  <IssueDetails issueDetails={issueDetails}/> }
        </Box>
        <Box>
            <EditIssueButton issueid={issueDetails!.id}/>
        </Box>
    </Grid> 
   
  )
}

export default IssueDetailsPage
