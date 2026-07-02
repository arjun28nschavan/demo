import sum from './sum.js';

describe("test for sum fnx", () =>{
    test("adds 2 + 2 to equal 4", () => {
        // expect().toBe(); -> expectaion , what ans should be
        expect(sum(4, 8)).toBe(12);
    });

    test("adds -5 + -5 to equal -10", () => {
        expect(sum(-5, -5)).toBe(-10);
    });
});


//run npm test