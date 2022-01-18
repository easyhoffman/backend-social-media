import { login, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class GetDatabase extends UserDatabase {

    get = async (
        id:string
    ): Promise<any> => {

        try {

            const result = await this.connection
                .select("*")
                .from("labook20_posts")
                .where({ id })

            return result;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }   
    }

}