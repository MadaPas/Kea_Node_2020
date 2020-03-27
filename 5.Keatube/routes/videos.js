const router = require("express").Router()
const uuid = require("uuid").v4;
// console.log(uuid4());
// const video = response.video.path;

const  crypto = require("crypto");
//generate a completly random string of bytes
// console.log(crypto.randomBytes(18).toString("hex"));


const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },

    filename: (req, file, cb) => {
        console.log(file);
        console.log(crypto.randomBytes(18).toString("hex"));


        //Get the encoding and add it to the random file name
        cb(null, "test.mp4");
    }
});

const upload = multer({ dest: 'videos/', storage: storage })


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

// for(i = 0; i < 100; i++) {
//     videos.push({
//         id: i+2,
//         filename: "test" + i,
//         title: "hello" + i
//     });
// }

const videosPerPage = 12;
//todo pagination.... what values do we need?
//how many videos---> 12
//page number --->
router.get("/videos", (req, res) => {
    console.log("How do I console log the page here?", );
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({
        response: videos.slice(start, end)
    });
    //return res.send({message: "Test works, you should see videos here soon xd"})
    // return res.send({response: videos});
});

router.get("/videos/:videoId", (req, res) => {
    //return res.send({message: "Test works, you should see videos here soon xd"})
    //videos... get one video with that unique videoId
    //get the videoId ==> req.params.videoId
    // videos.find(); // returns object
    // videos.filter(); // returns array
    return res.send({
        response: videos.find(video => video.fileName == req.params.videoId)
    });
});


router.post("/videos", upload.single('uploadedVideo'), (req, res, next) => {
    console.log(req.file)
    return res.redirect("/")
})

module.exports = router