import cors from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./app/module/user/user.route";
// import globalErrorHandler from "./app/middlewares/globalErrorhandler";
// import notFound from "./app/middlewares/notFound";
// import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/v1/student", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", test);

//Not Found

export default app;
