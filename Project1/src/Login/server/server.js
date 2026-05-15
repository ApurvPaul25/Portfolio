const express =require("express")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: "http://localhost:5173", credentials: true}))

const JWT_SECRET= 'key'
const REFRESH_TOKEN_SECRET= 'key_two'

let users =[]

app.post("/api/signup",(req, res)=>{
    const {email, password, location} = req.body

    if(email.find(u=>u.email === email)){
        return res.status(400).json({error: "User already exists"})
    }

    const newUser = {email, password, location, refreshToken: null}

    const accessToken = jwt.sign({email}, JWT_SECRET, {expiresIn: '15m'})
    const refreshToken = jwt.sign({email}, REFRESH_TOKEN_SECRET, {expiresIn: '7d'})

    newUser.refreshToken = refreshToken
    users.push(newUser)

    res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: false})
    res.json({accessToken, email, location})
})


app.post("/api/login", (req, res)=>{
    const {email, password} = req.body
    const user = users.find(u=> u.email === email && u.password === password)

    if(!user) return res.status(400).json({error: "Invalid Credentials"})

    const accessToken = jwt.sign({email}, JWT_SECRET, {expiresIn: "15m"})
    const refreshToken = jwt.sign({email}, REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

    user.refreshToken = refreshToken
    res.cookie("refreshToken", refreshToken, {httpOnly: true})
    res.json({email, accessToken, location: user.location})
})


app.get("/api/refresh", (req, res)=>{
    const token = req.cookies.refreshToken
    if(!token) return res.status(401).send()

    const user = users.find(u=> u.refreshToken === token)
    if(!user) return res.status(403).send()

    const newAccessToken = jwt.sign({email: user.email}, JWT_SECRET, {expiresIn: '15m'})
    res.json({accessToken: newAccessToken, email: user.email, location: user.location})
})

app.listen(5000, ()=> console.log('Server running on port 5000'))