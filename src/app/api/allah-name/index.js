import { getAllahName } from "./route";

export default function handler(req, res) {
  if (req.method === "GET") {
    return getAllahName(req, res);
  }

  res.status(405).end();
}
