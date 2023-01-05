import mongoose from "mongoose";

const uri = process.env.MDB_URI;

if (!uri) {
  console.log("Please provide MDB_URI");
  process.exit();
}
mongoose.connect(uri).then(() => {
  console.log("MDB Connected Successfully");
});
