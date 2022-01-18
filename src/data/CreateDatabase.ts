import { login, postInput, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class CreateDatabase extends UserDatabase {

    //Problem: missing column: AuthorId

    createPost = async (
        input: postInput,
        id: string
        
    ): Promise<any> => {

        try {

            const users: any = [];

            const result = await this.connection
                .insert({
                    id: id,
                    photo: input.photo,
                    description: input.description,
                    type: input.type
                    
                })
                .into('labook20_posts')
                
            

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }   
    }

}