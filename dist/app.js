"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/midlewares/globalErrorHandler"));
const NotFound_1 = __importDefault(require("./app/midlewares/NotFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use("/api/v1", routes_1.default);
const test = (req, res) => {
    const a = 10;
    res.send(a);
};
app.get("/", test);
app.use(globalErrorHandler_1.default);
//Not Found
app.use(NotFound_1.default);
exports.default = app;
