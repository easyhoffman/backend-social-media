import { Request, Response } from "express";
import { CreateBusiness } from "../business/CreateBusiness";
//import { DeleteBusiness } from "../business/DeleteBusiness";
import { GetBusiness } from "../business/GetBusiness";
import { LoginBusiness } from "../business/LoginBusiness";
import { SignUpBusiness } from "../business/SignUpBusiness";

export class SignUpController {


    signUp = async (
        req: Request,
        res: Response
    )=>{
        try{

            let message = "Success!"

            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				
            }
            

            const token = await new SignUpBusiness().createUser(input);


            res.status(201).send({ message, token });

        }catch(error){
            res.status(400)
            let message = error.sqlMessage || error.message

            res.send({ message })
        }
    }

    login = async (
        req: Request,
        res: Response
    )=>{
        try{

            let message = "Success!"

            
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };
            
           
            const token = await new LoginBusiness().login(loginData);
            
            res.status(200).send({message, token});

        }catch(error){

            let message = error.sqlMessage || error.message

            res.status(400)

            res.send({ message })
        }
    }

    get = async (
        req: Request,
        res: Response
    )=>{
        try{

            const id = req.params.id
            
            const posts = await new GetBusiness().get(id);
            
            res.status(200).send(posts);

        }catch(error){
            res.send({ message: error.message }).status(error.status);        }
    }

    createPost = async (
        req: Request,
        res: Response
    )=>{
        try{
            
            let message = "Post created successfully!"

            const input = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
				
            }
           
            const token = req.headers.authorization!;

            const post = await new CreateBusiness().createPost(token, input);
            
            res.status(200).send({ message });

        }catch(error){
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message }) }
     
    }

    // delete = async (
    //     req: Request, res: Response
    // )=> {
    //     try {

    //         const input = {
    //             id: req.params.id,
	// 			token: req.headers.authorization!
    //         }

    //        const deleteUser = await new DeleteBusiness().deleteUser(input);

    //         res.status(200).send({ message: "Usuário apagado com sucesso" });

    //     } catch (error) {
    //         res.status(400).send({ error: error.message });
    //     }

    // }

    
}