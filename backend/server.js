import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import morgan from "morgan"

import cors from "cors"
import test from "./routes/test.js"
import mail from "./routes/mail.js"

dotenv.config()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.use("/api/test", test)
app.use("/api/mail", mail)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
