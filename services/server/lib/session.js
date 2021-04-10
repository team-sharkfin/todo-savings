import expressSession from "express-session";

const { EXPRESS_SESSION_SECRET } = process.env;

export default function session() {
  return expressSession({
    secret: EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  });
}
