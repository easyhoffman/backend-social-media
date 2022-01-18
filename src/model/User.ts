export enum POST_TYPES{
    NORMAL = "normal",
    ADMIN = "event"
}


export interface user {
    id:string
    name: string
    email: string
    password: string
           
}

export interface postInput {
    photo: string,
    description: string,
    type: POST_TYPES
}

export interface post {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
 } 


export interface login {
    email: string,
    password: string
}