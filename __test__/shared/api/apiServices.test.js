import axios from "axios";
import { doGet, doDelete, doPost, doPut } from "../../../src/shared/api/apiServices";

jest.mock("axios");

describe("apiServices", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("doGet", () => {
    it("debe retornar data en respuesta exitosa", async () => {
      axios.get.mockResolvedValueOnce({ data: { foo: "bar" } });
      const result = await doGet("url", "token", { extra: "header" }, { q: 1 });
      expect(result).toEqual({ foo: "bar" });
      expect(axios.get).toHaveBeenCalledWith("url", expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "Content-Type": "application/json",
          extra: "header"
        }),
        params: { q: 1 }
      }));
    });

    it("debe retornar error en excepción", async () => {
      axios.get.mockRejectedValueOnce(new Error("fail"));
      const result = await doGet("url", "token");
      expect(result.error).toBe("fail");
    });
  });

  describe("doDelete", () => {
    it("debe retornar data en respuesta exitosa", async () => {
      axios.delete.mockResolvedValueOnce({ data: { ok: true } });
      const result = await doDelete("url", "token", { extra: "header" }, { id: 1 });
      expect(result).toEqual({ ok: true });
      expect(axios.delete).toHaveBeenCalledWith("url", expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "Content-Type": "application/json",
          extra: "header"
        }),
        data: { id: 1 }
      }));
    });

    it("debe retornar error en excepción", async () => {
      axios.delete.mockRejectedValueOnce(new Error("fail"));
      const result = await doDelete("url", "token");
      expect(result.error).toBe("fail");
    });
  });

  describe("doPost", () => {
    it("debe retornar data en respuesta exitosa", async () => {
      axios.post.mockResolvedValueOnce({ data: { ok: true } });
      const result = await doPost("url", "token", { extra: "header" }, { foo: "bar" });
      expect(result).toEqual({ ok: true });
      expect(axios.post).toHaveBeenCalledWith("url", { foo: "bar" }, expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "Content-Type": "application/json",
          extra: "header"
        })
      }));
    });

    it("debe retornar error en excepción", async () => {
      axios.post.mockRejectedValueOnce(new Error("fail"));
      const result = await doPost("url", "token");
      expect(result.error).toBe("fail");
    });
  });

  describe("doPut", () => {
    it("debe retornar data en respuesta exitosa", async () => {
      axios.put.mockResolvedValueOnce({ data: { ok: true } });
      const result = await doPut("url", "token", { extra: "header" }, { foo: "bar" });
      expect(result).toEqual({ ok: true });
      expect(axios.put).toHaveBeenCalledWith("url", { foo: "bar" }, expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "Content-Type": "application/json",
          extra: "header"
        })
      }));
    });

    it("debe retornar error en excepción", async () => {
      axios.put.mockRejectedValueOnce(new Error("fail"));
      const result = await doPut("url", "token");
      expect(result.error).toBe("fail");
    });
  });
});