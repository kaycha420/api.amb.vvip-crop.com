const multer = require('multer');
var fs = require('fs');
const app = require('../services/app.service');
const config = require(__dirname + '/../config/app.json')[app['env']];
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
// still not used
const fileUpload = (storagePath) => {
    // still not used
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, storagePath)
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
        }
    });

    var upload = multer({ storage: storage }).fields([{ name: 'game_image' }, { name: 'cover_image', maxCount: 1 }])

    return upload(req, res, async(err) => {

        if (err) {
            return res.status(500).json(err)
        }
        let body = req.body;
        let files = req.files;

        return { body, files }

    })
}

module.exports = {
    fileUpload
}