import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "./models/User";
import { hash } from "bcrypt";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  @Query(() => [User])
  users() {
    return User.findAll();
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedPassword = await hash(password, 12);

    const errorHandler = (err: any) => {
      console.error(err);
    };

    try {
      await User.sync();
      await User.create({
        email,
        password: hashedPassword,
      }).catch(errorHandler);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
