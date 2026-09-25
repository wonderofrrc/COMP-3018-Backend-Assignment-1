import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /", () => {
    it("should return Hello World", async () => {
        // Arrange
        // (no setup needed, app is already imported)

        // Act
        const response: Response = await request(app).get("/");

        // Assert
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, World!");
    });
});
