"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const statuscode = 500;
    const message = err.message || "Something went Wrong";
    return res.status(statuscode).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandler;
