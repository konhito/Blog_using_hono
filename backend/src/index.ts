import { Hono } from "hono";
import { userRouter } from "./routes/User";
import { blogRouter } from "./routes/Blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/*", cors());
app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
