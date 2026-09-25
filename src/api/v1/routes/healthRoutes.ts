import { Router, Request, Response } from "express";

const healthRouter: Router = Router();

/**
 * Health check response shape
 */
interface HealthCheckResponse {
    /** Overall health status of the server */
    status: string;
    /** Seconds the process has been running */
    uptime: number;
    /** ISO timestamp of when the check ran */
    timestamp: string;
    /** Application version string */
    version: string;
}

/**
 * Returns server health status information
 * @param _req - Express request object
 * @param res - Express response object
 * @returns void
 */
healthRouter.get("/health", (_req: Request, res: Response): void => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.status(200).json(healthData);
});

export default healthRouter;
