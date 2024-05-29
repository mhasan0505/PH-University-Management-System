"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./app/module/user/user.route");
// import globalErrorHandler from "./app/middlewares/globalErrorhandler";
// import notFound from "./app/middlewares/notFound";
// import router from "./app/routes";
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
// app.use("/api/v1/student", StudentRoutes);
app.use("/api/v1/users", user_route_1.UserRoutes);
const test = (req, res) => {
    const a = 10;
    res.send(a);
};
app.get("/", test);
//Not Found
exports.default = app;
