import { GraphQLList} from "graphql";
import { UserType } from "../TypeDefs/User";
import { resolve } from "path";
import { Users } from "../../Entities/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find()
    }
}