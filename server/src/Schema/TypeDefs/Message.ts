import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



export const MessageType = new GraphQLObjectType({
    name:"MessageType",
    fields:() => ({
        successful:{type:GraphQLBoolean},
        message : {type:GraphQLString}
    })
})