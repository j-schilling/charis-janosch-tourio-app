import mongoose from "mongoose";
import "./Place";

const { Schema } = mongoose;
// const placeObjectId = Schema.ObjectId
const commentSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
});
const Comment =
    mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;