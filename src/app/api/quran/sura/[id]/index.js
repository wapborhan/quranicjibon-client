import { getSuraByID } from "./route";

export default function handler(req, res) {
  if (req.method === "GET") {
    return getSuraByID(req, res);
  }

  res.status(405).end();
}
