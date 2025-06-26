import { doGet, doDelete, doPost, doPut } from "../../../src/shared/api/apiServices";
describe("Test api network - doDelete", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("doDelete - respuesta exitosa", async () => {
    const mockData = { deleted: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await doDelete("https://fakeurl.com", "Bearer token", {}, { id: 1 });
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://fakeurl.com",
      expect.objectContaining({
        method: "DELETE",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        }),
        body: JSON.stringify({ id: 1 }),
      })
    );
  });

  it("doDelete - respuesta con error", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: "Bad Request",
      json: async () => ({}),
    });

    const result = await doDelete("https://fakeurl.com", "Bearer token", {}, { id: 1 });
    expect(result.error).toContain("Error en la solicitud DELETE: 400 Bad Request");
  });

  it("doDelete - fetch lanza excepción", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await doDelete("https://fakeurl.com", "Bearer token", {}, { id: 1 });
    expect(result.error).toBe("Network error");
  });
});

describe("Test api network - doPost", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("doPost - respuesta exitosa", async () => {
    const mockData = { created: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await doPost("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://fakeurl.com",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        }),
        body: JSON.stringify({ name: "test" }),
      })
    );
  });

  it("doPost - respuesta con error", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: async () => ({}),
    });

    const result = await doPost("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result.error).toContain("Error en la solicitud POST: 500 Internal Server Error");
  });

  it("doPost - fetch lanza excepción", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await doPost("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result.error).toBe("Network error");
  });
});

describe("Test api network - doPut", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("doPut - respuesta exitosa", async () => {
    const mockData = { updated: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await doPut("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://fakeurl.com",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        }),
        body: JSON.stringify({ name: "test" }),
      })
    );
  });

  it("doPut - respuesta con error", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
      statusText: "Forbidden",
      json: async () => ({}),
    });

    const result = await doPut("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result.error).toContain("Error en la solicitud PUT: 403 Forbidden");
  });

  it("doPut - fetch lanza excepción", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await doPut("https://fakeurl.com", "Bearer token", {}, { name: "test" });
    expect(result.error).toBe("Network error");
  });
});
describe("Test api network", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("test on get - respuesta exitosa", async () => {
    const mockData = { foo: "bar" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await doGet("https://fakeurl.com", "Bearer token");
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://fakeurl.com",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        }),
      })
    );
  });

  it("test on get - respuesta con error", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: async () => ({}),
    });

    const result = await doGet("https://fakeurl.com", "Bearer token");
    expect(result.error).toContain("Error en la solicitud: 404 Not Found");
  });

  it("test on get - fetch lanza excepción", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await doGet("https://fakeurl.com", "Bearer token");
    expect(result.error).toBe("Network error");
  });
});

