import express, { Express, Request, Response } from "express";
import healthRouter from "./api/v1/routes/healthRoutes";

const app: Express = express();

/**
 * Root route for basic server verification
 * @param _req - Express request object
 * @param res - Express response object
 * @returns void
 */
app.get("/", (_req: Request, res: Response): void => {
    res.send("Hello, World!");
});

app.use("/api/v1", healthRouter);

export default app;
