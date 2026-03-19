const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
title: {type: String,required: true},
content: {type: String, required:true},
author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
imageUrl: String,
tags: [String]
},{timestamps: true});
module.exports = mongoose.model('Posts', postschema);