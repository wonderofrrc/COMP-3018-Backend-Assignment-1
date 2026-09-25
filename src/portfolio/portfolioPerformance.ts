/**
 * Result of a portfolio performance calculation
 */
export interface PortfolioPerformance {
    /** Amount originally invested */
    initialInvestment: number;
    /** Current portfolio value */
    currentValue: number;
    /** Difference between current value and initial investment */
    profitOrLoss: number;
    /** Profit or loss as a percent of the initial investment */
    percentageChange: number;
    /** Human readable summary of performance */
    performanceSummary: string;
}

/**
 * Threshold rule for selecting a performance summary message
 */
interface PerformanceThreshold {
    matches: (percentageChange: number) => boolean;
    summary: string;
}

/**
 * Ordered rules for performance summaries (first match wins)
 */
const performanceThresholds: PerformanceThreshold[] = [
    {
        matches: (percentageChange: number): boolean => percentageChange > 30,
        summary: "Excellent performance! Your investments are doing great.",
    },
    {
        matches: (percentageChange: number): boolean => percentageChange > 10,
        summary: "Solid gain. Keep monitoring your investments.",
    },
    {
        matches: (percentageChange: number): boolean => percentageChange > 0,
        summary: "Modest gain. Your portfolio is growing slowly.",
    },
    {
        matches: (percentageChange: number): boolean => percentageChange === 0,
        summary: "No change. Your portfolio is holding steady.",
    },
    {
        matches: (percentageChange: number): boolean => percentageChange >= -10,
        summary: "Minor loss. Stay calm and review your options.",
    },
    {
        matches: (_percentageChange: number): boolean => true,
        summary: "Significant loss. Review your portfolio strategy.",
    },
];

/**
 * Calculates portfolio profit/loss, percentage change, and summary message
 * @param initialInvestment - Amount originally invested
 * @param currentValue - Current portfolio value
 * @returns Portfolio performance details
 */
export const calculatePortfolioPerformance = (
    initialInvestment: number,
    currentValue: number
): PortfolioPerformance => {
    const profitOrLoss: number = currentValue - initialInvestment;
    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    const matchedThreshold: PerformanceThreshold | undefined =
        performanceThresholds.find((threshold: PerformanceThreshold) =>
            threshold.matches(percentageChange)
        );

    const performanceSummary: string =
        matchedThreshold?.summary ??
        "Significant loss. Review your portfolio strategy.";

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
};
