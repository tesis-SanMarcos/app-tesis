import { rawGlobalStyles } from "../../../src/shared/configuration/global-styles";
import { COLORS } from "../../../src/shared/utils/colors/constant";

describe("rawGlobalStyles", () => {
  it("fab debe tener backgroundColor igual a COLORS.black", () => {
    expect(rawGlobalStyles.fab.backgroundColor).toBe(COLORS.black);
  });

  it("title debe tener color blanco y fontWeight bold", () => {
    expect(rawGlobalStyles.title.color).toBe("white");
    expect(rawGlobalStyles.title.fontWeight).toBe("bold");
  });

  it("debe tener las claves principales definidas", () => {
    expect(rawGlobalStyles).toHaveProperty("flexRow");
    expect(rawGlobalStyles).toHaveProperty("flexColumn");
    expect(rawGlobalStyles).toHaveProperty("flexCenter");
    expect(rawGlobalStyles).toHaveProperty("title");
    expect(rawGlobalStyles).toHaveProperty("fab");
  });
});