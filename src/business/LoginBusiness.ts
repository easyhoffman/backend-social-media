import { compare } from "bcryptjs";
import { LoginDatabase } from "../data/LoginDatabase";
import { SignUpDatabase } from "../data/SignUpDatabase";
import { login, user } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class LoginBusiness{

    

    login = async (
        
        login:login
        ): Promise<string> => {

        try{
            if(!login.email || !login.password ){
                throw new Error("Please fill all the fields");
            }

            
            const userFromDB : user = await new LoginDatabase().login(login.email);

            
            const hashCompare = await new HashManager().compareHash(login.password, userFromDB.password);

            const accessToken = new Authenticator().generateToken({ id: userFromDB.id});

            if (!hashCompare) {
                throw new Error("Invalid Password!");
            }

            return accessToken;

            

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}