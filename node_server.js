import express from "express"
import path from "path"
import serverRoutes from "./routes/router"

const __dirname = path.resolve()
const app = express()
app.use(serverRoutes)
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(3000, () => {
    console.log('server started')
})

