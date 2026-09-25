import express, { Express, Request, Response } from "express";
import healthRouter from "./api/v1/routes/healthRoutes";
import portfolioRouter from "./api/v1/routes/portfolioRoutes";

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
app.use("/api/v1", portfolioRouter);

export default app;
