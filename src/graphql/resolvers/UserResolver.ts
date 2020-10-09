import { Query } from "type-graphql";
import { User } from "../../entity/User";


export class UserResolver {
  @Query(() => [User])
  async find()   {
    return [];
  }

  @Query(() => User)
  async findOne()   {
    return [];
  }

}