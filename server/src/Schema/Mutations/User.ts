import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { resolve } from "path";
import { Users } from "../../Entities/User";
import { MessageType } from "../TypeDefs/Message";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
   async resolve(parent:any,args:any){
        const {name,username,password} = args
        await Users.insert({name,username,password})
        return args
    }
}


export const DELETE_USER = {
    type:MessageType,
    args: {
        id:{type:GraphQLID}
    },
    async resolve(parent:any, args:any) {
        const id = args.id
        await Users.delete(id)
        return {successful:true,message:"DELETE WORK"}
    }
}


export const UPDATE_PASSWORD = {
    type:MessageType,
    args: {
        username:{type:GraphQLString},
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent:any, args:any) {
        const {username,oldPassword,newPassword} = args
        const user = await Users.findOneBy({username:username})
        if(!user) {
            throw new Error("USERNAME DOESNT EXIS")
        }
        const userPassword = user?.password

        if(oldPassword === userPassword) {
            await Users.update(
                {username:username},
                {password:newPassword},
            )

            return {successful:true,message:"PASSWORD UPDATE"}
        }
        else {
            throw new Error("PASSWORD DO NOT MATCH")
        }
    }
}