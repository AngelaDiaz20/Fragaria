import { formatPrice } from "../App"

//Test of number format function 
describe("Test function format", () => {
    test("return string",() => {
        expect(typeof formatPrice.format(1000)).toBe("string")
    })

    test("return number with format thousands", () => {
        expect(formatPrice.format(30000)).toBe("30.000")
    })
})
