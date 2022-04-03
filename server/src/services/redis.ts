import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
});
// {
//     url: process.env.REDIS_URL,
//   }
export async function connect() {
  client.on("error", (err) => console.log("redis client error", err));
  client.on("connect", () =>
    console.log("redis client successfully connected")
  );

  await client.connect();
}

export async function set(key: string, value: Record<string, any>) {
  await client.json.set(key, ".", value);
}

export async function get(key: string) {
  return await client.json.get(key);
}
