const router = require("express").Router()
const uuid = require("uuid").v4;
// console.log(uuid4());
// const video = response.video.path;

const videos = [{ 
    id: "", 
    title: "NightSky",
    thumbnail: "", 
    description: "Watch this beautiful sky and enjoy the stars",
    fileName: "29a4415c-81c3-45ca-b95f-fe18c74998a0.mp4",
    uploadDate: "", 
    category: "Science", 
    tags: ["stars", "sky"] 
}];

//point to the correct file
// path + title + extension


router.get("/videos", (req, res) => {
    //return res.send({message: "Test works, you should see videos here soon xd"})
    return res.send({response: videos});
});

router.get("/videos/:videoId", (req, res) => {
    //return res.send({message: "Test works, you should see videos here soon xd"})
    //videos... get one video with that unique videoId
    //get the videoId ==> req.params.videoId
    // videos.find(); // returns object
    // videos.filter(); // returns array
    return res.send( { response: videos.find(video => video.fileName == req.params.videoId )});
});


module.exports = router