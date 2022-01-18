import { compare } from "bcryptjs";
import { GetDatabase } from "../data/GetDatabase";

export class GetBusiness{

    

    get = async (
        id: string
    ): Promise<any> => {

        try{

            const getById = await new GetDatabase().get(id);

            return getById;

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}