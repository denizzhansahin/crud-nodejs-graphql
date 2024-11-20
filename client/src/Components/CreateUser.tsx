import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_USER } from '../Graphql/Mutation'

function CreateUser() {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const [createUser, { error }] = useMutation(CREATE_USER)
  return (

    <div className='createUser'>
      <input type="Text" placeholder='name' onChange={(event) => { setName(event.target.value) }} />
      <input type="Text" placeholder='username' onChange={(event) => { setUserName(event.target.value) }} />
      <input type="Text" placeholder='password' onChange={(event) => { setPassword(event.target.value) }} />
      <button onClick={() => {
        createUser({
          variables: { name: name, username: userName, password: password }
        })
      }}>Create User</button>
    </div>

  )
}

export default CreateUser