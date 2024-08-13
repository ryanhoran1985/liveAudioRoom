import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "getstream api key"
const apiSecret = "getstream api secret"

export const client = new StreamClient(apiKey, apiSecret)