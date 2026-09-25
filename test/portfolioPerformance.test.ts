import {
    calculatePortfolioPerformance,
    PortfolioPerformance,
} from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should return excellent performance for gains above 30 percent", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });

    it("should return solid gain at exactly 30 percent", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 13000;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(3000);
        expect(result.percentageChange).toBe(30);
        expect(result.performanceSummary).toBe(
            "Solid gain. Keep monitoring your investments."
        );
    });

    it("should return no change when values are equal", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 10000;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });

    it("should return significant loss for drops below negative 10 percent", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 8999.9;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.percentageChange).toBeCloseTo(-10.001, 3);
        expect(result.performanceSummary).toBe(
            "Significant loss. Review your portfolio strategy."
        );
    });
});
