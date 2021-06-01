import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import morgan from "morgan"
import path from "path"
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

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
    res.send("API is running....")
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
