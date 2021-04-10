import session from "express-session";
import { EXPRESS_SESSION_SECRET } from "./config.js";

export default session({
  secret: EXPRESS_SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
});
