import { addTwo, sumNumbers } from "../src/index";

describe("Math utils file", () => {
    test("Check that the add two method adds two numbers correctly", () => {
        expect(addTwo(1,2)).toEqual(3);
    });

    test("Check that the sumNumbers method sums all numbers provided", () => {
        expect(sumNumbers([1,2,3,4,5])).toEqual(15);
    });

    test("Check that the sumNumbers method handles no numbers provided correctly", () => {
        expect(sumNumbers([])).toEqual(0);
    });
});