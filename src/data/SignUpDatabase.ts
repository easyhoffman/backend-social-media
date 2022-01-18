import { user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class SignUpDatabase extends UserDatabase {

    signUp = async (
        user: user
    ): Promise<any> => {

        const result = await this.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
            
         }).into('labook20_users')
      } 
        
}