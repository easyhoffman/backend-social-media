
import { SignUpDatabase } from "../data/SignUpDatabase";
import { user } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class SignUpBusiness{

    

    createUser = async (
        
        user:any
        ): Promise<string> => {

        try{
            if(!user.name || !user.email || !user.password){
                throw new Error("Please fill all the fields");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = new IdGenerator().generate();

            const hashPassword = await new HashManager().createHash(user.password);

            const signUp = await new SignUpDatabase().signUp({
                id, 
                name:user.email, 
                email:user.email,
                password:hashPassword 
               });

            const token = new Authenticator().generateToken({id});

            return token

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}