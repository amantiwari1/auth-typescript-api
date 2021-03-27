import express, { Request } from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
// intialization
const app = express();

//setting
app.set("port", process.env.PORT || 3000);

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get("/", (req, res) => {
  res.send(`The Api is ${app.get("port")} `);
});
app.use(authRoutes);
app.use(specialRoutes);

export default app;
