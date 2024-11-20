import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries'
import { DELETE_USER } from '../Graphql/Mutation'

function ListOfUsers() {
    const { data } = useQuery(GET_ALL_USERS)
    if (data) {
        console.log(data)
    }

    const [deleteUser,{error}] = useMutation(DELETE_USER)
    return (
        <div>
            {
                data && data.getAllUsers.map((user:any)=>{
                    return (
                        <div>
                            {" "}
                            User ID:    {user.id} / Name :   {user.name} / Username:   {user.username} / Password:    {user.password}
                            
                            <button
                                onClick={()=>{
                                    deleteUser({variables:{id:user.id}})
                                }}
                            >Delete User</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListOfUsers