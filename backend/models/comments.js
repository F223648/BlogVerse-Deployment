const mongoose = require('mongoose');

const comschema = new mongoose.Schema({

postId: {type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true},
userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
comment: String
},{timestamps: true});
module.exports = mongoose.model('Comment', comschema);