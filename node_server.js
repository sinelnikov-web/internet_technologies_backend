import express from "express"
import path from "path"
import serverRoutes from "./routes/router"
import jwt from "jsonwebtoken"

const __dirname = path.resolve()
const app = express()
app.use(serverRoutes)
app.use(express.json())
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.post('/login', (req, res) => {
    try {
        const {username, password} = req.body
        if (username === 'admin' && password === 'admin') {
            const tokenPayload = {
                username
            }
            const token = jwt.sign(tokenPayload, 'dev-token', {expiresIn: '24h'})
            res.json({access: token})
        } else {
            res.status(400).json({message: 'Неверный логин или пароль.'})
        }
    } catch (err) {
        res.status(400).json({message: 'login error'})
    }
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'login.html'))
})

app.get('/authorized_zone', (req, res) => {
    const token = req.query.token
    if (!token) {
        res.redirect('/login')
    } else {
        try {
            let decodedToken = jwt.verify(token, 'dev-token')
            res.sendFile(path.resolve(__dirname, 'static', 'authorized.html'))
        } catch (err) {
            res.redirect('/login')
        }
    }
})

app.listen(3000, () => {
    console.log('server started')
})

