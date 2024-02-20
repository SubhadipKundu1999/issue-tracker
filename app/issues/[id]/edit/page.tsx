import React from 'react'
import IssueForm from '../../_components/IssueForm'
import  Prisma  from '../../../../prisma/client'
import { notFound } from 'next/navigation'

interface Props{
    params:{
        id:string
    }
}

async function EditIssuePage({params}:Props) {

    const issue = await Prisma.issue.findUnique({
        where:{
            id: parseInt(params.id)
        }
    });

    if(!issue){
        notFound();
    }

  return (
    <div>
      <IssueForm issue={issue}  />
    </div>
  )
}

export default EditIssuePage
