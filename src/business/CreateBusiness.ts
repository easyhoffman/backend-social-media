import { compare } from "bcryptjs";
import { CreateDatabase } from "../data/CreateDatabase";
import { post, postInput } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class CreateBusiness{

    

    createPost = async (
        
        token:string,
        post:postInput
        ): Promise<any> => {

        try{

            const validation = await new Authenticator().getTokenData(token);

            if (!validation) {
                throw new Error("Token problems")
            }

            const id = new IdGenerator().generate();

            const createPost = await new CreateDatabase().createPost(post, id);

            

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}