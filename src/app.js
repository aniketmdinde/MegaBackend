import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true, //allows objects inside objects
    limit: "16kb"
}))

app.use(express.static("public")) //allow use of static assets

app.use(cookieParser())

export default app;