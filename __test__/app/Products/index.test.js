import { useRoute } from "@react-navigation/core";
jest.mock("@react-navigation/core");
describe("Rendering", () => {
    it("should match to snapshot when accept Products", async () => {
        useRoute.mockReturnValue({
            params: {
              scanner: { id: 1, data: "Nueva información" }
            }
          });
          const route = useRoute();
          const { scanner } = route.params;
    
          // Ahora puedes usar scanner como necesites en tu prueba
          expect(scanner).toEqual({ id: 1, data: "Nueva información" });
    });
});