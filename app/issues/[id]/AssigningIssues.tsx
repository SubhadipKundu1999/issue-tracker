"use client"

import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function AssigningIssues() {

    const [users, setUsers] = useState<User[]>([])


    useEffect(()=>{
        const fetch =async ()=>{
            const {data} = await axios.get<User[]>("/api/users");
            setUsers(data);
           
        }
        fetch();
    },[])

    console.log(users);
  return (
    <Select.Root >
  <Select.Trigger  placeholder="Assign..."/>
  <Select.Content>
    <Select.Group>
    <Select.Item  value="users" disabled>Users</Select.Item>
      {users.map((user)=>  <Select.Item  key={user.id} value={user!.email!}>{user.email}</Select.Item>
   )}
      </Select.Group>
  </Select.Content>
</Select.Root>
  )
}

export default AssigningIssues
