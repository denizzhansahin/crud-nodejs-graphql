


import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation'

function UpdatePassword() {
    const [userName, setUserName] = useState("")
    const [oldPassword, setOldName] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD)



  return (
    <div>
        <input type='text' placeholder='Username...' onChange={(event) => { setUserName(event.target.value) }}/>
        <input type='text' placeholder='Current Password...' onChange={(event) => { setOldName(event.target.value) }}/>
        <input type='text' placeholder='New Password...' onChange={(event) => { setNewPassword(event.target.value) }}/>
        <button  
        onClick={() => {
            updatePassword({
              variables: { username: userName, oldPassword: oldPassword, newPassword: newPassword }
            })
          }}
        >UPDATE PASSWORD</button>
    </div>
  )
}

export default UpdatePassword