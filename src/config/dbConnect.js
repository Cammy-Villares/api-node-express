import mongoose from "mongoose";

mongoose.connect('mongodb+srv://CammyVillares:<reis3231741696>@cluster0.gfvfz7c.mongodb.net/cluster0?');

let db = mongoose.connection;

export default db;