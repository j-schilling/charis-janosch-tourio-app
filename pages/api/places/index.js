// import { db_places } from "../../../lib/db_places";
import dbConnect from "../../../db/connect"
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places)
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message })
    }
  }
}
