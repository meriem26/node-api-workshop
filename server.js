const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.listen(3001, () => {
  console.log("My app is running here!");
});
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post("/", (req, res) => {
  res.send("this is is a test");
});

app.get("/albumsB", (req, res) => {
  res.send(albumsData);
  console.log("My app is here!");
});
app.get("/albumsB/:albumId", (req, res) => {
  var id = req.params.albumId;
  var album = albumsData.filter(album => album.albumId === id);
  res.send(album);
});
app.post("/albumsB", (req, res) => {
  albumsData.push(req.body);
  res.send("Pushed item");
});
app.delete("/albumsB/:id", (req, res) => {
  albumToDelete = albumsData.find(album => album.albumId === req.params.id);
  albumsData.splice(albumsData.indexOf(albumToDelete), 1);
  res.send("Deleted Album" + req.params.id);
});
app.put("/albumsB", (req, res) => {
  var id = req.body.albumId;
  console.log(id, genre);
  let index = albumsData.findIndex(album => album.albumId === id);
  albumsData[index] = req.body;
  res.send(albumsData);
});

let albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Jaz",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];
