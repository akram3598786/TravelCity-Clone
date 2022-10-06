const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/vishalData")
  .then(() => console.log("connection successful"))
  .catch((error) => console.log(error));

const playlistScema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  ip_address: String,
});

const Playlist = new mongoose.model("Playlist", playlistScema);

const createDocument = async () => {
  try {
    const Reactplaylist = new Playlist({
      first_name: "vishal",
      last_name: "karale",
      email: "vishal@gmail.com",
      gender: "male",
      ip_address: "12245odcjc",
    });
    const result = await Reactplaylist.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createDocument();
