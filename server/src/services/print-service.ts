import fetch from "node-fetch";

const baseUrl = "https://api.harvardartmuseums.org";

export interface Print {
  id: string;
}

async function getAll(): Promise<Print[]> {
  const response = await fetch(
    `${baseUrl}/prints?apiKey=${process.env.API_KEY}`
  );

  console.log("response", response);

  return response.json() as unknown as Print[];
}

export default {
  getAll,
} as const;
