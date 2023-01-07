import { formatPrice } from "../App"

//Test of number format function 
describe("Test function format", () => {
    test("return string",() => {
        expect(typeof formatPrice.format(1000)).toBe("string")
    });

    test("return number with format thousands", () => {
        expect(formatPrice.format(30000)).toBe("30.000")
    });

    test("return numberS with format thousands", () => {
        expect(formatPrice.format(758000)).toBe("758.000")
    })

    test("return number with format es", () => {
        expect(formatPrice.format(15884800)).toBe("15.884.800")
    })
})
