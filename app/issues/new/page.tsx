"use client"

import { Box, TextArea, TextField } from '@radix-ui/themes'
import React, { useCallback, useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function NewIssuepage() {

  const [value, setValue] = useState("Initial value");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <div className='p-5' >
      <h1>new issue</h1>
<div className='max-w-xl space-y-4'>
<TextField.Root>
  <TextField.Input placeholder="title..." />
</TextField.Root>
<SimpleMDE  value={value} onChange={onChange} />

</div>


    </div>
  )
}

export default NewIssuepage
