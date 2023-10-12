//Importera
const myObj = require("./add");

describe("Ett test med addition", () => {
    it("1+2 skall bli 3", () => {
        expect(myObj.add(1,2)).toBe(3);
    })

    it("5+7 skall bli 12", () => {
        expect(myObj.add(5,7)).toBe(12);
    })
})

describe("Testar Subtraction", () => {
    it("5-3 skall vara 2", () => {
        expect(myObj.sub(5, 3)).toBe(2);
    })
})