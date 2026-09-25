import { Router, Request, Response } from "express";
import {
    calculatePortfolioPerformance,
    PortfolioPerformance,
} from "../../../portfolio/portfolioPerformance";

const portfolioRouter: Router = Router();

/**
 * Calculates portfolio performance from query parameters
 * @param req - Express request with initialInvestment and currentValue query params
 * @param res - Express response object
 * @returns void
 */
portfolioRouter.get(
    "/portfolio/performance",
    (req: Request, res: Response): void => {
        const initialInvestment: number = Number(req.query.initialInvestment);
        const currentValue: number = Number(req.query.currentValue);

        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        res.status(200).json(result);
    }
);

export default portfolioRouter;
