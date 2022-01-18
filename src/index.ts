import { app } from "./controller/app"
import { SignUpController } from "./controller/SignUpController"

app.get("/", (req, res)=> {
    res.send("Hello! Server running smoothly")
})


app.post('/users/signup', new SignUpController().signUp)

app.post('/users/login', new SignUpController().login)

app.post('/posts/create', new SignUpController().createPost)

app.get('/posts/:id', new SignUpController().get)