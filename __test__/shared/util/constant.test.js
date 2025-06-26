import { COLORS } from "../../../src/shared/utils/colors/constant.js"
describe("Constant Globals" , () => {
    it("Color constant" , ()=> {
        console.log(COLORS)
        expect(COLORS.white).toBe("#F9F9F9")
        expect(COLORS.black).toBe("#222222")
        expect(COLORS.primaryOrange).toBe("rgb(249, 112, 0)")
        expect(COLORS.grey).toBe("#CCCCCC")
    })
})