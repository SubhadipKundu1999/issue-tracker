"use client"

import {  Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod"
import { createIssueSchema } from '@/app/validation'
import {z} from "zod";
import ErrorComponent from '@/app/components/ErrorComponent';
import Spinner from '@/app/components/Spinner';

/*
interface  IssueForm{
  title:string,
  description :string
}
*/
// // // or // // // 

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssuepage() {
  const [error, setError]= useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const router = useRouter();

const { register, control, handleSubmit,formState: { errors } }= 
      useForm<IssueForm>(
        {resolver: zodResolver(createIssueSchema)}
        );

async function onSubmit(data:IssueForm){
  try {
    setIsSubmiting(true);
    await  axios.post("/api/issues", data);
    router.push("/");
    
  } catch (error) {
    setIsSubmiting(false);
    setError("An Unexpected Error occured");
  }
  
  }

  return (
    <div className='max-w-xl p-5'>
      {error &&  
      <Callout.Root className='mb-2'>
       <Callout.Text>
         {error}
       </Callout.Text>
      </Callout.Root>}
    <form className='' 
       onSubmit={handleSubmit(onSubmit)}>
      <div className=' space-y-4'>
        <div>
        <TextField.Root>
            <TextField.Input placeholder="title..." {...register('title')} />
          </TextField.Root>
          <ErrorComponent>
            {errors.title?.message}
          </ErrorComponent>
        </div>
        <div>
          <Controller
          name="description"
          control={control}
          render ={({field})=>(
            <SimpleMDE placeholder='Description' {...field}/> 
          )} />
          <ErrorComponent>
            {errors.description?.message}
          </ErrorComponent>
        </div>
        <Button className='hover:cursor-pointer'>
          {isSubmiting && <Spinner/>}Submit New Issue
          
         </Button>
      </div>
    </form> 

    </div>
  )
}

export default NewIssuepage
    