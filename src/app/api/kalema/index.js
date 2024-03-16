import { getKalema } from "./route";

export default function handler(req, res) {
  if (req.method === "GET") {
    return getKalema(req, res);
  }

  res.status(405).end();
}
