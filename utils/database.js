import mongoose, { connect } from "mongoose";

let isConnect = false;

export const connectedToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnect = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
