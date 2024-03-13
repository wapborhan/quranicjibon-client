import { getAllSuras } from "./route";

export default function handler(req, res) {
  if (req.method === "GET") {
    return getAllSuras(req, res);
  }

  res.status(405).end();
}
