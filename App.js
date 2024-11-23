import express from "express"
import mongoose, { mongo } from "mongoose"
import session from "express-session"
import cors from "cors"
import { Hello } from "./Hello.js"
import { Lab5 } from "./lab5/index.js"
import { ModuleRoutes } from "./kanbas/modules/routes.js"
import { AssignmentRoutes } from "./kanbas/assignments/routes.js"
import UserRoutes from "./kanbas/users/routes.js"
import CourseRoutes from "./kanbas/courses/routes.js"
import "dotenv/config"
import { EnrollmentRoutes } from "./kanbas/enrollments/routes.js"

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING)
const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.NETLIFY_URL,
    }
))

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "waffles",
    resave: false,
    saveUninitialized: false,
}

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: ".onrender.com",
        // domain: process.env.REMOTE_SERVER,
    }
}

console.log("CORS Origin:", process.env.NETLIFY_URL);
console.log("Node ENV:", process.env.NODE_ENV);
console.log("Session Options:", {
    ...sessionOptions,
    secret: sessionOptions.secret ? "[SECRET]" : undefined
})

app.use(express.json())
app.use(
    session(sessionOptions)
)
UserRoutes(app)
CourseRoutes(app)
AssignmentRoutes(app)
ModuleRoutes(app)
EnrollmentRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
