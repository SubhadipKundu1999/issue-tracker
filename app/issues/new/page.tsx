"use client"

import { Box, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

function page() {
  return (
    <div className='p-5' >
      <h1>new issue</h1>
<div className='max-w-xl space-y-4'>
<TextField.Root>
  <TextField.Input placeholder="title..." />
</TextField.Root>

<TextArea placeholder="Description ..." />
</div>


    </div>
  )
}

export default page
