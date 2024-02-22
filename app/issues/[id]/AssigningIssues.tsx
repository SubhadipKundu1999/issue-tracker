"use client"

import Skeletons from '@/app/components/Skeleton'
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function AssigningIssues() {

    // const [users, setUsers] = useState<User[]>([])


    // useEffect(()=>{
    //     const fetch =async ()=>{
    //         const {data} = await axios.get<User[]>("/api/users");
    //         setUsers(data);
           
    //     }
    //     fetch();
    // },[])


    const {isLoading , error, data:users} = useQuery<User[]>({
        queryKey:['users'],
        queryFn:()=> axios.get("/api/users").then((res)=>
            res.data
        ),
        staleTime: 60 * 1000, //60 sec
        retry: 3              //retry 3 times

    })

    // console.log(data);

    if(error) return null ;

    if(isLoading) return <Skeletons width="40" height="28px"/>
  return (
    <Select.Root >
  <Select.Trigger  placeholder="Assign..."/>
  <Select.Content>
    <Select.Group>
    <Select.Item  value="users" disabled>Users</Select.Item>
      { users && users.map((user)=>  <Select.Item  key={user.id} value={user!.email!}>{user.email}</Select.Item>
   )}
      </Select.Group>
  </Select.Content>
</Select.Root>
  )
}

export default AssigningIssues
