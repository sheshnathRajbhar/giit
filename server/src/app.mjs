import express from "express"
import questionRouter from "./routes/question.route.mjs"

export const app = express()
app.use(express.json())


app.use("/api/v1/question", questionRouter)