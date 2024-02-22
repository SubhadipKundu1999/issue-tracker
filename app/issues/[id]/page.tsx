import { Box, Button, Flex, Grid } from '@radix-ui/themes'
import  Prisma  from '../../../prisma/client'
import React from 'react'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './DeleteIssueButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
interface Props{
    params:{
        id:string
    }
}

async function IssueDetailsPage({params:{id}}: Props) {
    const session = await getServerSession(authOptions);

    const issueDetails = await Prisma.issue.findUnique({
        where:{
            id: parseInt(id)
        }
    })

  return (
    <Grid columns={{initial:"1", sm:"5"}} className='p-5 mt-10 prose min-w-full gap-5'>
        <Box  className='md:col-span-4'> 
             { issueDetails  &&  <IssueDetails issueDetails={issueDetails}/> }
        </Box>
        {session &&
        <Box className='w-full'>
            <Flex gap={"2"} direction={"column"} >
            <EditIssueButton issueid={issueDetails!.id}/>
            <DeleteIssueButton issueid={issueDetails!.id}/>
            </Flex>
        </Box>
}
    </Grid> 
   
  )
}

export default IssueDetailsPage
