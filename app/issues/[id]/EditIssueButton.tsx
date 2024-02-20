import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'

function EditIssueButton({issueid}:{issueid:number}) {
  return (
          <Link href={`/issues/${issueid}/edit`}>
            <Button>  
              <FaRegEdit /> 
              Edit Issue
            </Button>
          </Link> 
  )
}

export default EditIssueButton
