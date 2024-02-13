import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id).populate("comments")
    console.log("----- place id api file:", place)
    // const comment = place?.comments;
    // const allCommentIds = comment?.map((comment) => comment.$oid) || [];
    // const comments = db_comments.filter((comment) =>
    //   allCommentIds.includes(comment._id.$oid)
    // );

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(place);
  }


  if (request.method === "PATCH") {
    const updatedPlaceData = request.body
    console.log("------ updatedPlaceData:", updatedPlaceData)

    await Place.findByIdAndUpdate(id, updatedPlaceData)
    if (!updatedPlaceData) {
      return response.status(404).json({ status: "Could not edit/update the place" })
    }
    response.status(200).json({ status: "updated/edited this Place" })
  }
}


